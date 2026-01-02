import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { Menu, X, Camera } from 'lucide-react';
=======
import { Menu, X, Camera } from '@/components/OptimizedIcons';
>>>>>>> 713e091 (Initial project upload)
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initial scroll position
    setIsScrolled(window.scrollY > 50);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  // Determine navbar styling: white background with dark text unless on home page at top
  const shouldShowWhiteBg = !isHomePage || isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowWhiteBg ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2 text-2xl font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <Camera className={`w-8 h-8 ${shouldShowWhiteBg ? 'text-gray-900' : 'text-white'}`} />
            <span className={shouldShowWhiteBg ? 'text-gray-900' : 'text-white'}>
              Varun Photography
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? shouldShowWhiteBg
                      ? 'text-gray-900'
                      : 'text-white'
                    : shouldShowWhiteBg
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
<<<<<<< HEAD
=======
              aria-label="Book a photography session"
>>>>>>> 713e091 (Initial project upload)
            >
              Book Now
            </Link>
          </div>

          <button
            className={`md:hidden ${shouldShowWhiteBg ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
=======
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
>>>>>>> 713e091 (Initial project upload)
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium ${
                  location.pathname === link.path
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium text-center"
<<<<<<< HEAD
=======
              aria-label="Book a photography session"
>>>>>>> 713e091 (Initial project upload)
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
