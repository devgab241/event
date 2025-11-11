import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Détecter si on est sur la page d'accueil
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'À Propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Détermine si la navbar doit être transparente
  const isTransparent = isHomePage && !scrolled;
  // Détermine la couleur du texte
  const textColor = isTransparent ? 'text-white' : 'text-gray-700';
  const textHoverColor = isTransparent ? 'hover:text-gold-400' : 'hover:text-gold-600';
  const activeColor = isTransparent ? 'text-gold-400' : 'text-gold-600';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent py-6' 
          : 'bg-white/95 backdrop-blur-sm shadow-lg py-4 border-b border-gold-300'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo avec Image */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              src="/images/logo.png"
              alt="EventiDecor Logo"
              className="h-12 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <span className={`text-2xl font-display font-bold transition-colors ${
              isTransparent ? 'text-white' : 'text-primary-900'
            }`}>
              Alhogo<span className={isTransparent ? 'text-gold-400' : 'text-gold-500'}>Decor</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all relative group ${
                  location.pathname === link.path
                    ? activeColor
                    : `${textColor} ${textHoverColor}`
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                } ${isTransparent ? 'bg-gold-400' : 'bg-gold-500'}`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className={`btn-primary ${isTransparent && '!bg-gold-500 !text-primary-900 hover:!bg-gold-400'}`}
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${textColor}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden border border-gold-300"
            >
              <div className="flex flex-col space-y-4 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-gold-600'
                        : 'text-gray-700 hover:text-gold-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center"
                >
                  Devis Gratuit
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;