import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Accueil', id: 'hero' },
    { label: 'Nos services', id: 'services' },
    { label: 'Notre méthode', id: 'process' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'À propos', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-200/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src="/SyliDigit_logo.jpeg"
            alt="SyliDigit"
            className="h-12 w-auto"
          />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 font-medium hover:text-green-700 transition-colors duration-300 text-sm"
            >
              {item.label}
            </button>
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
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-2 text-gray-700 font-medium hover:text-green-700 hover:pl-2 transition-all duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
