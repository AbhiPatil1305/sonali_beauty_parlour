import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import GalleryLightbox from '../gallery/GalleryLightbox';

export default function GalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const preview = galleryItems.slice(0, 6);

  return (
    <section className="py-28 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4 block">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">A Glimpse of Our Work</h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors uppercase tracking-widest shrink-0 group">
            View Full Gallery <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Editorial masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {preview.map((item, i) => {
            // First item spans 2 rows, creates the editorial feel
            const isLarge = i === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`group cursor-pointer overflow-hidden rounded-xl bg-secondary ${isLarge ? 'md:row-span-2' : ''}`}
                onClick={() => setLightboxIndex(i)}
              >
                <div className={`relative w-full h-full ${isLarge ? 'aspect-[4/5] md:aspect-auto md:h-full min-h-[300px] md:min-h-[500px]' : 'aspect-square'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[9px] uppercase tracking-widest text-white/70 block">{item.category}</span>
                    <p className="text-white font-serif text-sm">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <GalleryLightbox
        items={preview}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
