import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
 // import type { Service } from '../data/services';

export default function FeaturedServices() {
  // Get up to 4 featured services that are available
  const featuredServices = services.filter(s => s.available !== false && s.featured).slice(0, 4);

  if (featuredServices.length === 0) return null;

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Signature Services</h2>
            <p className="text-text/70 font-light text-lg">
              Experience our most beloved treatments, crafted for your ultimate care and confidence.
            </p>
          </div>
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors uppercase tracking-widest shrink-0"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map(service => (
            <Link 
              key={service.id} 
              to="/services" 
              className="group block relative rounded-2xl overflow-hidden aspect-[4/5] bg-secondary"
            >
              <img 
                src={service.image || 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} 
                alt={service.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/30">
                    {service.category}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-white mb-2">{service.name}</h3>
                <p className="text-white/80 text-sm font-light line-clamp-2">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/services" 
            className="inline-block w-full py-4 bg-primary text-background rounded-full text-center hover:bg-primary/90 transition-all touch-target font-medium tracking-wide"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
