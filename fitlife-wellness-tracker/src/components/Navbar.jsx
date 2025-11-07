import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="text-3xl mr-2">💪</span>
            FitLife
          </Link>

          <div className="flex space-x-6">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
