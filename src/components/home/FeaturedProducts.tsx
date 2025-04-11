
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { getFeaturedProducts } from '@/data/mockData';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-16 bg-white relative overflow-hidden featured-products">
      {/* Decorative elements */}
      <div className="decorative-circle green w-80 h-80 -top-40 -left-20"></div>
      <div className="decorative-circle blue w-64 h-64 bottom-10 -right-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="section-title text-center md:text-left mb-4 md:mb-0">Productos Destacados</h2>
          <Link to="/productos" className="flex items-center text-choco-blue hover:text-choco-green transition-colors group">
            <span className="mr-2">Ver todos los productos</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
