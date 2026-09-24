import { Sparkles, Image as ImageIcon, Info, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { contactConfig } from '../config/contact';

const actions = [
  { icon: Sparkles, label: 'Services', sublabel: 'Explore beauty services', to: '/services' },
  { icon: ImageIcon, label: 'Gallery', sublabel: 'View our work', to: '/gallery' },
  { icon: Info, label: 'About', sublabel: 'Our story & approach', to: '/about' },
  { icon: Navigation, label: 'Directions', sublabel: 'Find us in Bidar', href: contactConfig.googleMaps || '#' },
];

export default function QuickActions() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, i) => {
            const Icon = action.icon;
            const inner = (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileTap={{ scale: 0.97 }}
                className="group bg-white border border-secondary/40 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/20 hover:shadow-sm transition-all h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/60 flex items-center justify-center text-primary/70 group-hover:bg-accent/15 group-hover:text-primary transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-primary text-sm">{action.label}</p>
                  <p className="text-text/50 text-xs font-light mt-0.5">{action.sublabel}</p>
                </div>
              </motion.div>
            );

            return 'to' in action ? (
              <Link key={action.label} to={action.to!} className="touch-target">{inner}</Link>
            ) : (
              <a
                key={action.label}
                href={action.href}
                target={action.href !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={(e) => action.href === '#' && e.preventDefault()}
                aria-disabled={action.href === '#'}
                className="touch-target"
              >
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
