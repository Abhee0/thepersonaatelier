import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-stone-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl sm:text-4xl text-amber-700 tracking-tight" onClick={closeMenu}>
          The Persona Atelier
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            to="/"
            className={`text-sm tracking-wide transition-colors ${isActive('/') ? 'text-amber-700 font-medium' : 'text-stone-600 hover:text-stone-900'
              }`}
          >
            HOME
          </Link>
          <Link
            to="/programs"
            className={`text-sm tracking-wide transition-colors ${isActive('/programs') ? 'text-amber-700 font-medium' : 'text-stone-600 hover:text-stone-900'
              }`}
          >
            PROGRAMS
          </Link>
          <Link
            to="/proof"
            className={`text-sm tracking-wide transition-colors ${isActive('/proof') ? 'text-amber-700 font-medium' : 'text-stone-600 hover:text-stone-900'
              }`}
          >
            ABOUT
          </Link>
          <a
            href="https://wa.me/919518944051"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-stone-900 text-white text-sm tracking-wide hover:bg-stone-800 transition-colors"
          >
            CHAT ON WHATSAPP
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-stone-900"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/"
              onClick={closeMenu}
              className={`block py-2 text-base tracking-wide transition-colors ${isActive('/') ? 'text-amber-700 font-medium' : 'text-stone-600'
                }`}
            >
              HOME
            </Link>
            <Link
              to="/programs"
              onClick={closeMenu}
              className={`block py-2 text-base tracking-wide transition-colors ${isActive('/programs') ? 'text-amber-700 font-medium' : 'text-stone-600'
                }`}
            >
              PROGRAMS
            </Link>
            <Link
              to="/proof"
              onClick={closeMenu}
              className={`block py-2 text-base tracking-wide transition-colors ${isActive('/proof') ? 'text-amber-700 font-medium' : 'text-stone-600'
                }`}
            >
              ABOUT
            </Link>
            <a
              href="https://wa.me/919518944051"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-5 py-3 bg-stone-900 text-white text-sm text-center tracking-wide hover:bg-stone-800 transition-colors"
            >
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
