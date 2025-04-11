
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';
import { getImageFallback } from '@/lib/utils';

const CategoryList: React.FC = () => {
  return (
    <section className="py-16 bg-choco-light">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Nuestras Categorías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/productos?categoria=${category.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 card-hover-effect">
                <div className="relative h-40 image-hover-zoom">
                  <img 
                    src={category.image || getImageFallback(category.name)} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-choco-brown/80 to-transparent flex items-end justify-center p-4">
                    <h3 className="text-white font-medium text-center">{category.name}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
