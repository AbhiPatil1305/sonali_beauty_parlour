import type { Service } from '../../data/services';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  // If no image, use a neutral fallback pattern or placeholder
  const imageSrc = service.image || 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  
  const displayPrice = service.priceLabel 
    ? service.priceLabel 
    : service.price 
      ? `₹${service.price}` 
      : 'Price on request';

  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(service)}
      className="group w-full text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-secondary/30 flex flex-col h-full relative"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img 
          src={imageSrc} 
          alt={service.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2 items-start">
          <div className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-[10px] font-medium tracking-wider uppercase text-primary shadow-sm">
            {service.category}
          </div>
          {service.popular && (
            <div className="px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-[10px] font-medium tracking-wider uppercase text-white shadow-sm flex items-center gap-1">
              <Sparkles size={10} /> Popular
            </div>
          )}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-xl text-primary mb-2 line-clamp-1">{service.name}</h3>
        <p className="text-text/70 text-sm font-light line-clamp-2 mb-4 flex-grow">{service.description}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-secondary/50">
          <span className="text-sm font-medium text-primary">
            {displayPrice}
          </span>
          <div className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors text-primary">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
