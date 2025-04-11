
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { categories } from '@/data/mockData';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-sm py-3 navbar-categories sticky top-[72px] z-40">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex overflow-x-auto space-x-8">
            {categories.map((category) => {
              const isActive = location.search.includes(`categoria=${category.slug}`);
              return (
                <Link
                  key={category.id}
                  to={`/productos?categoria=${category.slug}`}
                  className={`whitespace-nowrap font-medium py-2 border-b-2 transition-colors duration-300 ${
                    isActive 
                    ? 'text-choco-green border-choco-green' 
                    : 'text-choco-dark hover:text-choco-blue border-transparent hover:border-choco-blue'
                  }`}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
          
          <div className="lg:hidden w-full">
            <div className="relative">
              <select 
                className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-choco-green"
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
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
