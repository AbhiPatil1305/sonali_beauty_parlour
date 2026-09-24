import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { salonData } from '../data/salon';

export default function Testimonials() {
  return (
    <section className="py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4 block">Customer Love</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">What Clients Say</h2>
          {/* Google Rating */}
          <div className="inline-flex flex-col items-center gap-2 mt-4 px-8 py-4 bg-white rounded-2xl border border-secondary/40 shadow-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={i < Math.floor(salonData.rating) ? 'fill-accent text-accent' : 'text-secondary'} />
              ))}
            </div>
            <p className="font-serif text-2xl text-primary">{salonData.rating}</p>
            <p className="text-xs text-text/60 uppercase tracking-widest">{salonData.reviewCount} {salonData.ratingSource} Reviews</p>
          </div>
        </motion.div>

        {/* Horizontal scrolling testimonial cards */}
        <div className="flex overflow-x-auto hide-scrollbar -mx-6 px-6 gap-5 pb-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="shrink-0 w-80 md:w-96 bg-white rounded-2xl p-8 border border-secondary/40 shadow-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              {t.isPlaceholder ? (
                <p className="text-sm text-primary/40 italic font-light leading-relaxed mb-6 border border-dashed border-secondary/60 rounded-lg p-3">
                  {t.quote}
                </p>
              ) : (
                <p className="text-primary/80 font-light leading-relaxed mb-6 italic">"{t.quote}"</p>
              )}
              <p className="font-medium text-sm text-primary/60 uppercase tracking-wider">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
