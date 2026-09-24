import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { contactConfig } from '../../config/contact';
import clsx from 'clsx';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-40 pb-safe border-t border-secondary/50">
      <div className="flex px-2 py-2 gap-2 max-w-sm mx-auto">
        <a 
          href={contactConfig.phone ? `tel:${contactConfig.phone}` : '#'}
          className={clsx("flex-1 flex flex-col items-center justify-center py-2 rounded-xl text-primary touch-target transition-colors", contactConfig.phone ? "hover:bg-secondary/50" : "opacity-50 cursor-not-allowed")}
          onClick={(e) => !contactConfig.phone && e.preventDefault()}
          aria-disabled={!contactConfig.phone}
        >
          <Phone size={20} className="mb-1" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Call</span>
        </a>
        <a 
          href={contactConfig.whatsapp ? `https://wa.me/${contactConfig.whatsapp}` : '#'}
          target={contactConfig.whatsapp ? "_blank" : undefined}
          rel={contactConfig.whatsapp ? "noopener noreferrer" : undefined}
          className={clsx("flex-1 flex flex-col items-center justify-center py-2 rounded-xl text-primary touch-target transition-colors", contactConfig.whatsapp ? "hover:bg-secondary/50" : "opacity-50 cursor-not-allowed")}
          onClick={(e) => !contactConfig.whatsapp && e.preventDefault()}
          aria-disabled={!contactConfig.whatsapp}
        >
          <MessageCircle size={20} className="mb-1" />
          <span className="text-[10px] uppercase tracking-wider font-medium">WhatsApp</span>
        </a>
        <a 
          href={contactConfig.googleMaps || '#'}
          target={contactConfig.googleMaps ? "_blank" : undefined}
          rel={contactConfig.googleMaps ? "noopener noreferrer" : undefined}
          className={clsx("flex-1 flex flex-col items-center justify-center py-2 rounded-xl bg-primary text-background touch-target transition-colors", contactConfig.googleMaps ? "hover:bg-primary/90" : "opacity-80 cursor-not-allowed")}
          onClick={(e) => !contactConfig.googleMaps && e.preventDefault()}
          aria-disabled={!contactConfig.googleMaps}
        >
          <MapPin size={20} className="mb-1" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Directions</span>
        </a>
      </div>
    </div>
  );
}
