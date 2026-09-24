import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const bridalOfferings = [
  { label: 'Bridal Makeup' },
  { label: 'Bridal Hair' },
  { label: 'Saree Draping' },
  { label: 'Pre-Bridal Care' },
  { label: 'Complete Packages' },
];

export default function BridalSection() {
  return (
    <section className="py-0 overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Image side */}
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Bridal Beauty"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/30" />
        </div>

        {/* Content side */}
        <div className="bg-primary flex flex-col justify-center px-10 md:px-16 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-6 block">Bridal Beauty</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Your day.<br />Your look.<br />Your moment.
            </h2>
            <p className="text-white/65 font-light leading-relaxed mb-10 text-lg">
              Explore beauty and styling services thoughtfully curated for your most special occasion.
            </p>

            <div className="space-y-3 mb-10">
              {bridalOfferings.map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="font-light text-sm tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/services?category=Bridal"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all group touch-target"
            >
              Explore Bridal Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
