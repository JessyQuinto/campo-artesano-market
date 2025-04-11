
import React from 'react';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategoryList from '@/components/home/CategoryList';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TutorialSteps from '@/components/tutorial/TutorialSteps';
import { producers } from '@/data/mockData';

const Index = () => {
  const featuredProducers = producers.filter(producer => producer.featured).slice(0, 3);

  return (
    <>
      <Header />
      <Navbar />
      
      <main>
        <HeroSection />
        
        <CategoryList />
        
        <FeaturedProducts />
        
        {/* Featured Artisans */}
        <section className="py-16 bg-white artisan-section">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-2">Conoce a los Artesanos</h2>
            <p className="text-gray-600 text-center mb-10">Las personas detrás de productos únicos</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducers.map(producer => (
                <div key={producer.id} className="bg-campo-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <img
                    src={producer.image}
                    alt={producer.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-medium text-lg text-campo-dark mb-1">{producer.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{producer.location} • Desde {producer.foundedYear}</p>
                    <p className="text-campo-dark">{producer.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <a
                href="/artesanos"
                className="inline-block py-2 px-6 rounded-md border border-campo-brown text-campo-brown hover:bg-campo-brown hover:text-white transition-colors"
              >
                Ver todos los artesanos
              </a>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-campo-cream">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestros clientes opinan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Las mochilas wayuu que compré son hermosas y de excelente calidad. Se nota el trabajo manual y el amor que ponen los artesanos en cada pieza."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-campo-brown text-white flex items-center justify-center">
                    <span>CM</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-campo-dark">Carolina Mendoza</p>
                    <p className="text-xs text-gray-500">Bogotá</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Los alimentos artesanales son increíbles. La miel de abejas es pura y de un sabor exquisito. Además, me encanta apoyar directamente a los productores rurales."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-campo-green text-white flex items-center justify-center">
                    <span>JR</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-campo-dark">Juan Rodríguez</p>
                    <p className="text-xs text-gray-500">Medellín</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "La joyería artesanal que adquirí es simplemente preciosa. Me encantó conocer la historia del artesano y su trayectoria. Definitivamente volveré a comprar."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-campo-terracotta text-white flex items-center justify-center">
                    <span>LP</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-campo-dark">Laura Pérez</p>
                    <p className="text-xs text-gray-500">Cali</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <TutorialSteps />
    </>
  );
};

export default Index;
