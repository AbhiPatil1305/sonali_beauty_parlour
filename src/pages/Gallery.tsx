import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../data/gallery';
import type { GalleryCategory } from '../data/gallery';
import GalleryLightbox from '../gallery/GalleryLightbox';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const filterOptions: (GalleryCategory | 'All')[] = ['All', 'Hair', 'Makeup', 'Bridal', 'Skin', 'Nails'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory | 'All'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return galleryItems;
    return galleryItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4 block">Our Work</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6">Beauty in Every Detail.</h1>
          <p className="text-text/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Explore a collection of beauty, styling and salon moments.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto hide-scrollbar justify-start md:justify-center -mx-6 px-6 md:mx-0 md:px-0 gap-6 mb-16 pb-4">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={clsx(
                "whitespace-nowrap pb-2 text-sm uppercase tracking-widest transition-all relative touch-target shrink-0",
                activeFilter === filter 
                  ? "text-primary font-medium" 
                  : "text-primary/50 hover:text-primary/80"
              )}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl bg-secondary"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:block hidden">
                  <span className="text-[10px] uppercase tracking-widest text-white/80 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-white text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-primary/50 font-serif italic text-lg">More images coming soon to this category.</p>
          </div>
        )}

        <div className="mt-32 pt-20 border-t border-secondary text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Find Your Next Look.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="px-8 py-4 bg-primary text-background rounded-full text-center hover:bg-primary/90 transition-all touch-target font-medium tracking-wide">
              Explore Services
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-primary/20 text-primary rounded-full text-center hover:bg-secondary/50 transition-colors touch-target font-medium tracking-wide">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <GalleryLightbox 
        items={filteredItems}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
