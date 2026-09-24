import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categoryCards } from '../data/categories';

export default function BeautyCategories() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4 block">Categories</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Explore by Category</h2>
        </motion.div>

        {/* Desktop: 4-col grid | Mobile: 2-col */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categoryCards.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/services?category=${encodeURIComponent(cat.filter)}`}
                className="group block relative overflow-hidden rounded-2xl aspect-[3/4] bg-secondary"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />

                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-1 md:mb-2">{cat.title}</h3>
                  <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed mb-3 md:mb-4 hidden md:block">{cat.description}</p>
                  <div className="flex items-center gap-1 text-white/80 text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
