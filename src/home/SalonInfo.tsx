import { motion } from 'framer-motion';
import { MapPin, Navigation, Star } from 'lucide-react';
import { salonData } from '../data/salon';
import { contactConfig } from '../config/contact';
import clsx from 'clsx';

export default function SalonInfo() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-secondary/30 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-6 block">Find Us</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-2">{salonData.name}</h2>
              <p className="text-accent text-sm font-medium uppercase tracking-widest mb-8">{salonData.category}</p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                  <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-text/80 font-light leading-relaxed">
                      Rampore Bank Colony,<br />Manahalli Rd, Gumpa,<br />Bidar, Karnataka 585403
                    </p>
                    <p className="text-xs text-text/50 mt-1">Located in <span className="font-medium text-primary/70">SS FITNESS CLUB</span></p>
                    <p className="text-xs text-text/40 mt-0.5">Plus Code: VGV9+G9 Bidar, Karnataka</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(salonData.rating) ? 'fill-accent text-accent' : 'text-secondary'} />
                  ))}
                </div>
                <span className="font-medium text-sm text-primary">{salonData.rating}</span>
                <span className="text-xs text-text/50">· {salonData.reviewCount} {salonData.ratingSource} reviews</span>
              </div>
            </div>

            <a
              href={contactConfig.googleMaps || '#'}
              target={contactConfig.googleMaps ? '_blank' : undefined}
              rel="noopener noreferrer"
              onClick={(e) => !contactConfig.googleMaps && e.preventDefault()}
              className={clsx(
                "w-full flex items-center justify-center gap-2 py-4 rounded-full font-medium text-sm tracking-wide transition-all touch-target",
                contactConfig.googleMaps
                  ? "bg-primary text-background hover:bg-primary/90"
                  : "bg-primary/50 text-background cursor-not-allowed"
              )}
            >
              <Navigation size={16} />
              {contactConfig.googleMaps ? 'Get Directions' : 'Directions Link Pending'}
            </a>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl overflow-hidden bg-secondary min-h-[280px] relative"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-14 h-14 rounded-full bg-white/60 flex items-center justify-center mb-4">
                <MapPin size={24} className="text-accent" />
              </div>
              <p className="text-primary/60 font-serif text-lg mb-1">SS FITNESS CLUB</p>
              <p className="text-primary/40 text-sm font-light">Bidar, Karnataka 585403</p>
              <a
                href={contactConfig.googleMaps || '#'}
                target={contactConfig.googleMaps ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={(e) => !contactConfig.googleMaps && e.preventDefault()}
                className="mt-6 px-6 py-2.5 rounded-full border border-primary/20 text-sm text-primary hover:bg-white/80 transition-colors"
              >
                {contactConfig.googleMaps ? 'Open in Google Maps' : 'Map link to be configured'}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
