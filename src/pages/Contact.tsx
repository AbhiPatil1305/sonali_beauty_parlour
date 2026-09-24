import { motion } from 'framer-motion';
import { Phone, MessageCircle, Navigation, Instagram, Mail, MapPin, Star } from 'lucide-react';
import { contactConfig } from '../config/contact';
import { salonData } from '../data/salon';
import clsx from 'clsx';

interface ContactAction {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  sublabel: string;
  href: string;
  available: boolean;
  primary?: boolean;
}

export default function Contact() {
  const actions: ContactAction[] = [
    {
      icon: Phone,
      label: 'Call Us',
      sublabel: contactConfig.phone || 'Number to be configured',
      href: contactConfig.phone ? `tel:${contactConfig.phone}` : '#',
      available: !!contactConfig.phone,
    },
    ...(contactConfig.phoneSecondary ? [{
      icon: Phone,
      label: 'Call (Alternate)',
      sublabel: contactConfig.phoneSecondary,
      href: `tel:${contactConfig.phoneSecondary}`,
      available: true,
    }] : []),
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      sublabel: 'Chat with us directly',
      href: contactConfig.whatsapp ? `https://wa.me/${contactConfig.whatsapp}` : '#',
      available: !!contactConfig.whatsapp,
      primary: true,
    },
    {
      icon: Navigation,
      label: 'Get Directions',
      sublabel: 'Open in Google Maps',
      href: contactConfig.googleMaps || '#',
      available: !!contactConfig.googleMaps,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      sublabel: contactConfig.instagram ? '@' + contactConfig.instagram.split('/').pop() : 'Handle to be configured',
      href: contactConfig.instagram || '#',
      available: !!contactConfig.instagram,
    },
    {
      icon: Mail,
      label: 'Email',
      sublabel: contactConfig.email || 'Email to be configured',
      href: contactConfig.email ? `mailto:${contactConfig.email}` : '#',
      available: !!contactConfig.email,
    },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6">Let's Connect.</h1>
          <p className="text-text/70 text-lg font-light leading-relaxed max-w-xl">
            Find the best way to reach us below. We're happy to help you explore our services.
          </p>
        </motion.div>

        {/* Contact action cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {actions.map((action, i) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <a
                  href={action.available ? action.href : '#'}
                  target={action.available && action.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={(e) => !action.available && e.preventDefault()}
                  aria-disabled={!action.available}
                  className={clsx(
                    "flex items-center gap-5 p-6 rounded-2xl border transition-all touch-target",
                    action.available
                      ? action.primary
                        ? "bg-primary text-background border-primary hover:bg-primary/90"
                        : "bg-white border-secondary/40 hover:border-primary/20 hover:shadow-sm text-primary"
                      : "bg-secondary/20 border-secondary/30 opacity-60 cursor-not-allowed text-primary"
                  )}
                >
                  <div className={clsx(
                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                    action.primary ? "bg-white/15" : "bg-secondary/60"
                  )}>
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm tracking-wide">{action.label}</p>
                    <p className={clsx("text-xs font-light truncate mt-0.5", action.primary ? "opacity-70" : "text-text/50")}>
                      {action.sublabel}
                    </p>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Salon details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 border border-secondary/30 shadow-sm"
        >
          <h2 className="text-2xl font-serif text-primary mb-6">{salonData.name}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-text/80 font-light leading-relaxed">
                    Rampore Bank Colony,<br />Manahalli Rd, Gumpa,<br />Bidar, Karnataka 585403
                  </p>
                  <p className="text-xs text-text/40 mt-1">Located in SS FITNESS CLUB</p>
                  <p className="text-xs text-text/30 mt-0.5">Plus Code: VGV9+G9 Bidar, Karnataka</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(salonData.rating) ? 'fill-accent text-accent' : 'text-secondary'} />
                  ))}
                </div>
                <span className="font-medium text-sm text-primary">{salonData.rating}</span>
              </div>
              <p className="text-xs text-text/50">{salonData.reviewCount} {salonData.ratingSource} Reviews</p>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-widest text-text/40 mb-2">Opening Hours</p>
                <p className="text-sm text-text/60 font-light">{salonData.openingHours.status}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
