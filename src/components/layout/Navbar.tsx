import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { salonData } from '../../data/salon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={clsx('fixed top-0 left-0 right-0 z-40 transition-all duration-300', scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6')}>
        <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt={salonData.name} className="h-10 w-10 rounded-full object-cover" />
            <span className="text-2xl font-serif text-primary tracking-wide">{salonData.shortName}</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest text-primary/80">
            <Link to="/" className="hover:text-primary transition-colors focus-visible:outline-accent">Home</Link>
            <Link to="/services" className="hover:text-primary transition-colors focus-visible:outline-accent">Services</Link>
            <Link to="/gallery" className="hover:text-primary transition-colors focus-visible:outline-accent">Gallery</Link>
            <Link to="/about" className="hover:text-primary transition-colors focus-visible:outline-accent">About</Link>
            <Link to="/contact" className="px-6 py-2 bg-primary text-background rounded-full hover:bg-primary/90 transition-colors touch-target flex items-center justify-center focus-visible:outline-accent focus-visible:outline-offset-2">Contact Us</Link>
          </nav>
          <button className="md:hidden text-primary p-2 touch-target flex items-center justify-center -mr-2 focus-visible:outline-accent" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-50 bg-background flex flex-col md:hidden">
            <div className="p-6 flex justify-between items-center py-6">
              <Link to="/" onClick={closeMenu} className="flex items-center gap-3 focus-visible:outline-accent">
                <img src="/logo.png" alt={salonData.name} className="h-10 w-10 rounded-full object-cover" />
                <span className="text-2xl font-serif text-primary">{salonData.shortName}</span>
              </Link>
              <button onClick={closeMenu} className="p-2 touch-target flex items-center justify-center text-primary -mr-2 focus-visible:outline-accent" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8 text-xl font-serif text-primary">
              <Link to="/" className="focus-visible:outline-accent p-2">Home</Link>
              <Link to="/services" className="focus-visible:outline-accent p-2">Services</Link>
              <Link to="/gallery" className="focus-visible:outline-accent p-2">Gallery</Link>
              <Link to="/about" className="focus-visible:outline-accent p-2">About</Link>
              <Link to="/contact" className="mt-8 px-8 py-3 bg-primary text-background rounded-full text-base font-sans uppercase tracking-widest focus-visible:outline-accent focus-visible:outline-offset-4">Contact Us</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
