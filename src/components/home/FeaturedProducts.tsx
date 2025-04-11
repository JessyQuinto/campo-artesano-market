
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { getFeaturedProducts } from '@/data/mockData';

const FeaturedProducts: React.FC = () => {
  // Tomamos solo 3 productos para simplificar
  const featuredProducts = getFeaturedProducts().slice(0, 3);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-choco-green opacity-10 rounded-full blur-2xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h2 className="section-title text-center md:text-left mb-4 md:mb-0">Productos Destacados</h2>
          <Link to="/productos" className="flex items-center text-choco-blue hover:text-choco-green transition-colors group">
            <span className="mr-2">Ver catálogo completo</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-choco-light rounded-lg p-6 shadow-sm">
            <p className="text-choco-brown font-medium mb-2">¿Eres artesano del Chocó?</p>
            <p className="text-gray-600 mb-4">Únete a nuestra plataforma y vende tus productos</p>
            <Link to="/contacto" className="text-choco-green hover:underline font-medium">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
