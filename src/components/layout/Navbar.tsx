
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-campo-cream shadow-sm py-2 navbar-categories">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex overflow-x-auto space-x-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/productos?categoria=${category.slug}`}
                className="whitespace-nowrap text-campo-dark hover:text-campo-brown font-medium py-2 border-b-2 border-transparent hover:border-campo-brown transition-colors duration-300"
              >
                {category.name}
              </Link>
            ))}
          </div>
          
          <div className="lg:hidden w-full">
            <div className="relative">
              <select 
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 appearance-none focus:outline-none focus:ring-1 focus:ring-campo-brown"
                onChange={(e) => {
                  if (e.target.value) {
                    window.location.href = `/productos?categoria=${e.target.value}`;
                  }
                }}
                defaultValue=""
              >
                <option value="" disabled>Seleccionar categoría...</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
