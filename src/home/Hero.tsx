import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { salonData } from '../data/salon';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-end md:items-center overflow-hidden bg-background">
      {/* Full background image — mobile */}
      <div className="absolute inset-0 md:right-1/2 md:inset-y-0 md:left-0 z-0">
        {/* Decorative shape desktop */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%] bg-secondary/40 rounded-l-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center py-32 md:py-0 md:min-h-[100dvh]">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-primary/15 text-[10px] uppercase tracking-[0.2em] text-primary/60 bg-white/50 backdrop-blur-sm">
              <MapPin size={10} className="text-accent" /> {salonData.name}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary leading-[1.1] mb-6">
              Beauty,<br />
              Care <span className="italic font-light text-primary/60">&</span><br />
              Confidence.
            </h1>

            <p className="text-lg text-text/70 mb-10 leading-relaxed font-light max-w-md">
              Discover a thoughtful beauty experience at {salonData.name}, {salonData.location.split(',')[0]}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background rounded-full hover:bg-primary/90 transition-all touch-target font-medium tracking-wide group"
              >
                Explore Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary/20 text-primary rounded-full hover:bg-secondary/50 transition-colors touch-target font-medium tracking-wide"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust indicator */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(salonData.rating) ? 'fill-accent text-accent' : 'text-secondary'} />
                ))}
              </div>
              <span className="text-sm font-medium text-primary">{salonData.rating}</span>
              <span className="text-sm text-text/50 font-light">· {salonData.reviewCount} {salonData.ratingSource} Reviews</span>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative h-[55vh] md:h-[80vh] w-full"
          >
            <div className="absolute inset-0 rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Salon experience at SonaliHerbal Beauty Parlour"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating rating card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-4 md:-left-8 bottom-10 bg-white rounded-2xl px-5 py-4 shadow-xl border border-secondary/20"
            >
              <p className="text-[10px] uppercase tracking-widest text-text/40 mb-1">{salonData.ratingSource} Rating</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-serif text-primary">{salonData.rating}</span>
                <Star size={16} className="fill-accent text-accent" />
              </div>
              <p className="text-[10px] text-text/50 mt-1">{salonData.reviewCount} reviews · {salonData.location.split(',')[0]}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
