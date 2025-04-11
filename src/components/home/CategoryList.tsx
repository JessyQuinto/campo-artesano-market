
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';

const CategoryList: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-8">Categorías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/productos?categoria=${category.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="relative h-40">
                  <img 
                    src={category.image || 'https://images.unsplash.com/photo-1533035336122-4327d347d2b0?q=80&w=1974&auto=format&fit=crop'} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4">
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
