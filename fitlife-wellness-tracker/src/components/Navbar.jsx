import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold flex items-center z-20">
            <span className="text-3xl mr-2">💪</span>
            FitLife
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={`hover:text-green-200 transition-colors ${isActive('/') ? 'font-bold border-b-2 border-white' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-green-200 transition-colors ${isActive('/about') ? 'font-bold border-b-2 border-white' : ''}`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`hover:text-green-200 transition-colors ${isActive('/services') ? 'font-bold border-b-2 border-white' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/dashboard"
              className={`hover:text-green-200 transition-colors ${isActive('/dashboard') ? 'font-bold border-b-2 border-white' : ''}`}
            >
              Dashboard
            </Link>
            <Link
              to="/contact"
              className={`hover:text-green-200 transition-colors ${isActive('/contact') ? 'font-bold border-b-2 border-white' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-20 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                onClick={closeMenu}
                className={`hover:text-green-200 transition-colors py-2 ${isActive('/') ? 'font-bold border-l-4 border-white pl-2' : ''}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className={`hover:text-green-200 transition-colors py-2 ${isActive('/about') ? 'font-bold border-l-4 border-white pl-2' : ''}`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={closeMenu}
                className={`hover:text-green-200 transition-colors py-2 ${isActive('/services') ? 'font-bold border-l-4 border-white pl-2' : ''}`}
              >
                Services
              </Link>
              <Link
                to="/dashboard"
                onClick={closeMenu}
                className={`hover:text-green-200 transition-colors py-2 ${isActive('/dashboard') ? 'font-bold border-l-4 border-white pl-2' : ''}`}
              >
                Dashboard
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`hover:text-green-200 transition-colors py-2 ${isActive('/contact') ? 'font-bold border-l-4 border-white pl-2' : ''}`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
