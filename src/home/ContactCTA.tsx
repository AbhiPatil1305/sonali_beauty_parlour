import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="relative py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Salon"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Ready to feel your best?</h2>
          <p className="text-white/70 text-lg font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Explore our services or get in touch with SonaliHerbal Beauty Parlour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-10 py-4 bg-white text-primary rounded-full text-center hover:bg-background transition-all touch-target font-medium tracking-wide"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 border border-white/30 text-white rounded-full text-center hover:bg-white/10 transition-colors touch-target font-medium tracking-wide"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
