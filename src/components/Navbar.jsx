import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['about', 'certifications', 'projects'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-black"
        >
          Portfolio
        </motion.h1>
        <div className="flex space-x-2">
          {navItems.map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveSection(item);
                document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-6 py-2 rounded-full transition-all ${
                activeSection === item
                  ? 'glass-effect text-black'
                  : 'text-gray-300 hover:text-black'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;