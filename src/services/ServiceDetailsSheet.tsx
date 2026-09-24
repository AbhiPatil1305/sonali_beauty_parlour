import type { Service } from '../data/services';
import BottomSheet from '../components/common/BottomSheet';
import { createWhatsAppLink } from '../lib/whatsapp';
import { Clock, Tag, CheckCircle2 } from 'lucide-react';
import { contactConfig } from '../config/contact';

interface ServiceDetailsSheetProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceDetailsSheet({ service, isOpen, onClose }: ServiceDetailsSheetProps) {
  if (!service) return null;

  const enquiryMessage = `Hello SonaliHerbal Beauty Parlour! I would like to enquire about the "${service.name}" service.`;
  const waLink = createWhatsAppLink(enquiryMessage);
  
  const imageSrc = service.image || 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  
  const displayPrice = service.priceLabel 
    ? service.priceLabel 
    : service.price 
      ? `₹${service.price}` 
      : 'Price on request';

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="relative aspect-[16/10] bg-secondary">
        <img 
          src={imageSrc} 
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="px-6 py-2 pb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="inline-block px-3 py-1 rounded-full border border-primary/20 text-[10px] uppercase tracking-widest text-primary/70">
            {service.category}
          </div>
          {service.available === false && (
            <div className="inline-block px-3 py-1 rounded-full border border-red-200 bg-red-50 text-[10px] uppercase tracking-widest text-red-600">
              Availability to be confirmed
            </div>
          )}
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4 leading-tight">{service.name}</h2>
        
        <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-secondary/50">
          <div className="flex items-center gap-2 text-primary/80 text-sm">
            <Tag size={16} className="text-accent" />
            <span className="font-medium">{displayPrice}</span>
          </div>
          {service.duration && (
            <div className="flex items-center gap-2 text-primary/80 text-sm">
              <Clock size={16} className="text-accent" />
              <span>{service.duration}</span>
            </div>
          )}
        </div>
        
        <p className="text-text/80 leading-relaxed font-light mb-8 text-sm md:text-base">
          {service.description}
        </p>
        
        {service.includes && service.includes.length > 0 && (
          <div className="mb-8 p-5 bg-white rounded-2xl border border-secondary/30 shadow-sm">
            <h3 className="font-medium text-primary mb-4 uppercase tracking-wider text-xs">What's Included</h3>
            <ul className="space-y-3">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text/80 font-light">
                  <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" /> 
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="pt-2">
          {contactConfig.whatsapp ? (
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-primary text-background text-center rounded-full font-medium touch-target transition-all hover:bg-primary/90 tracking-wide text-sm"
            >
              Enquire About This Service
            </a>
          ) : (
            <button 
              disabled
              className="block w-full py-4 bg-primary/50 text-background text-center rounded-full font-medium touch-target cursor-not-allowed tracking-wide text-sm"
            >
              Enquire (WhatsApp Pending)
            </button>
          )}
        </div>
      </div>
    </BottomSheet>
  );
}
