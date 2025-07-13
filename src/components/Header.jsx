import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiZap, FiPalette, FiDownload, FiStar } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: FiZap },
    { name: 'Gallery', href: '#gallery', icon: FiPalette },
    { name: 'Pricing', href: '#pricing', icon: FiStar },
    { name: 'Download', href: '#download', icon: FiDownload }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`neumorphic transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-4'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 neumorphic-button flex items-center justify-center">
                <SafeIcon icon={FiPalette} className="text-xl text-white" />
              </div>
              <span className="text-2xl font-bold engraved-text font-['Playfair_Display']">
                BrandBuilder
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SafeIcon icon={item.icon} className="text-sm" />
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              className="hidden md:block neumorphic-button px-6 py-3 text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
            >
              Start Building
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden neumorphic-button p-3 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-xl" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden mt-4 neumorphic overflow-hidden ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
          initial={false}
          animate={{
            maxHeight: isMenuOpen ? 400 : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SafeIcon icon={item.icon} className="text-lg" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
            <motion.button
              className="w-full neumorphic-button px-6 py-3 text-white font-semibold mt-4"
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/');
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Start Building
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;