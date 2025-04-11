
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import { useTutorial } from '@/hooks/useTutorial';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const { startTutorial } = useTutorial();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to search results page
    window.location.href = `/productos?search=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-choco-brown font-serif text-2xl font-bold">Artesanías<span className="text-choco-green">Chocó</span></span>
            </Link>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex items-center search-products">
            <form onSubmit={handleSearch} className="relative flex-grow max-w-md mx-4">
              <input
                type="search"
                placeholder="Buscar productos..."
                className="w-full rounded-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-choco-green"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-3 text-gray-400 hover:text-choco-green"
              >
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Navigation - visible on desktop */}
          <nav className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center gap-2 text-choco-dark hover:text-choco-green transition-colors">
                  <User size={20} />
                  <span>{user?.name}</span>
                </button>
                <div className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link to="/perfil" className="block px-4 py-2 text-sm text-choco-dark hover:bg-choco-cream">Mi Perfil</Link>
                    <Link to="/pedidos" className="block px-4 py-2 text-sm text-choco-dark hover:bg-choco-cream">Mis Pedidos</Link>
                    <button onClick={logout} className="w-full text-left block px-4 py-2 text-sm text-choco-dark hover:bg-choco-cream">Cerrar Sesión</button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-choco-dark hover:text-choco-green transition-colors flex items-center">
                <User size={20} className="mr-1" />
                <span>Iniciar Sesión</span>
              </Link>
            )}
            <Link to="/carrito" className="cart-icon relative text-choco-dark hover:text-choco-green transition-colors">
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-choco-red text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
            <button 
              onClick={startTutorial} 
              className="text-xs bg-choco-cream border border-choco-gold text-choco-brown rounded-full px-3 py-1 hover:bg-choco-gold hover:text-choco-dark transition-colors"
            >
              ¿Nuevo aquí?
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/carrito" className="cart-icon relative text-choco-dark hover:text-choco-green mr-4">
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-choco-red text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
            <button onClick={toggleMenu} className="text-choco-dark">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="mt-4 md:hidden search-products">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="search"
                placeholder="Buscar productos..."
                className="w-full rounded-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-choco-green"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-3 text-gray-400 hover:text-choco-green"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-choco-dark hover:text-choco-green" onClick={toggleMenu}>
                Inicio
              </Link>
              <Link to="/productos" className="text-choco-dark hover:text-choco-green" onClick={toggleMenu}>
                Productos
              </Link>
              <Link to="/artesanos" className="text-choco-dark hover:text-choco-green" onClick={toggleMenu}>
                Artesanos
              </Link>
              <Link to="/nosotros" className="text-choco-dark hover:text-choco-green" onClick={toggleMenu}>
                Nosotros
              </Link>
              {isAuthenticated ? (
                <>
                  <Link to="/perfil" className="text-choco-dark hover:text-choco-green" onClick={toggleMenu}>
                    Mi Perfil
                  </Link>
                  <Link to="/pedidos" className="text-choco-dark hover:text-choco-green" onClick={toggleMenu}>
                    Mis Pedidos
                  </Link>
                  <button 
                    onClick={() => { logout(); toggleMenu(); }} 
                    className="text-left text-choco-dark hover:text-choco-green"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <Link to="/login" className="text-choco-dark hover:text-choco-green" onClick={toggleMenu}>
                  Iniciar Sesión
                </Link>
              )}
              <button 
                onClick={() => { startTutorial(); toggleMenu(); }} 
                className="text-xs bg-choco-cream border border-choco-gold text-choco-brown rounded-full px-3 py-1 hover:bg-choco-gold hover:text-choco-dark transition-colors self-start"
              >
                ¿Nuevo aquí?
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
