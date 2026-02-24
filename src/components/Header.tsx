import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Nos services', path: '/services' },
    { label: 'Notre méthode', path: '/methode' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-200/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src="/SyliDigit_logo.jpeg"
            alt="SyliDigit"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-all duration-300 text-sm relative ${
                isActive(item.path)
                  ? 'text-green-700'
                  : 'text-gray-700 hover:text-green-700'
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-green-100 transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t border-green-200/30 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left py-2 font-medium hover:pl-2 transition-all duration-300 ${
                isActive(item.path)
                  ? 'text-green-700 pl-2'
                  : 'text-gray-700 hover:text-green-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
