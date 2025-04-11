
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-campo-dark text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-white font-serif text-2xl font-bold">Campo<span className="text-campo-terracotta">Artesano</span></span>
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              Conectando artesanos rurales con amantes del arte y la cultura. Productos auténticos con historias únicas.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/productos" className="text-gray-300 hover:text-white text-sm">Productos</Link>
              </li>
              <li>
                <Link to="/artesanos" className="text-gray-300 hover:text-white text-sm">Artesanos</Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-300 hover:text-white text-sm">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white text-sm">Blog</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-white text-sm">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/productos?categoria=tejidos" className="text-gray-300 hover:text-white text-sm">Tejidos</Link>
              </li>
              <li>
                <Link to="/productos?categoria=ceramicas" className="text-gray-300 hover:text-white text-sm">Cerámicas</Link>
              </li>
              <li>
                <Link to="/productos?categoria=alimentos" className="text-gray-300 hover:text-white text-sm">Alimentos</Link>
              </li>
              <li>
                <Link to="/productos?categoria=joyeria" className="text-gray-300 hover:text-white text-sm">Joyería</Link>
              </li>
              <li>
                <Link to="/productos?categoria=decoracion" className="text-gray-300 hover:text-white text-sm">Decoración</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="flex-shrink-0 mr-3 text-campo-terracotta" />
                <p className="text-gray-300 text-sm">Calle Principal #123, Bogotá, Colombia</p>
              </div>
              <div className="flex items-start">
                <Phone size={18} className="flex-shrink-0 mr-3 text-campo-terracotta" />
                <p className="text-gray-300 text-sm">+57 300 123 4567</p>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="flex-shrink-0 mr-3 text-campo-terracotta" />
                <p className="text-gray-300 text-sm">info@campoartesano.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Campo Artesano. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-4">
            <Link to="/terminos" className="hover:text-white">Términos y Condiciones</Link>
            <Link to="/privacidad" className="hover:text-white">Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
