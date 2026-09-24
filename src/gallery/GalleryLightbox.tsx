import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../data/gallery';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({ items, currentIndex, isOpen, onClose, onNavigate }: GalleryLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1817]/95 backdrop-blur-md"
        >
          <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors touch-target"
            >
              <X size={24} />
            </button>
          </div>

          <button
            onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors touch-target z-10 hidden md:flex"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => onNavigate((currentIndex + 1) % items.length)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors touch-target z-10 hidden md:flex"
          >
            <ChevronRight size={24} />
          </button>

          <div className="w-full max-w-5xl px-4 md:px-20 max-h-[100dvh] flex flex-col justify-center items-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-h-[75vh] flex justify-center"
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
            
            <div className="mt-6 text-center text-white">
              <span className="inline-block px-3 py-1 mb-2 rounded-full border border-white/20 text-[10px] uppercase tracking-widest text-white/70">
                {currentItem.category}
              </span>
              <h3 className="text-xl md:text-2xl font-serif mb-1">{currentItem.title}</h3>
              <p className="text-white/50 text-sm tracking-widest uppercase">
                {currentIndex + 1} / {items.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
