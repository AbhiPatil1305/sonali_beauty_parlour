import { Link } from 'react-router-dom';
import { MapPin, Instagram, Mail, Phone, MessageCircle } from 'lucide-react';
import { salonData } from '../../data/salon';
import { contactConfig } from '../../config/contact';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img src="/logo.png" alt={salonData.name} className="h-14 w-14 rounded-full object-cover border-2 border-white/20" />
              <div>
                <h3 className="text-3xl font-serif">{salonData.shortName}</h3>
                <p className="text-white/50 text-sm uppercase tracking-widest">Beauty • Care • Confidence</p>
              </div>
            </div>
            <p className="text-accent/80 text-xs font-medium uppercase tracking-widest mb-4">✦ VLCC Certified Artist</p>
            <p className="text-white/60 font-light leading-relaxed max-w-sm mb-1">
              Professional Makeup, Hairstyles & Mehndi at {salonData.name}, Bidar.
            </p>
            <p className="text-white/40 text-sm font-light">DM for bookings & more enquiry</p>
            {/* Social links – only show when configured */}
            <div className="flex gap-4 mt-8">
              {contactConfig.instagram && (
                <a href={contactConfig.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Instagram size={16} />
                </a>
              )}
              {contactConfig.whatsapp && (
                <a href={`https://wa.me/${contactConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <MessageCircle size={16} />
                </a>
              )}
              {contactConfig.phone && (
                <a href={`tel:${contactConfig.phone}`}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Phone size={16} />
                </a>
              )}
              {contactConfig.email && (
                <a href={`mailto:${contactConfig.email}`}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Mail size={16} />
                </a>
              )}
            </div>
            {/* Phone numbers */}
            {contactConfig.phone && (
              <div className="mt-6 space-y-1">
                <a href={`tel:${contactConfig.phone}`} className="text-white/60 text-sm font-light hover:text-white transition-colors block">
                  📞 {contactConfig.phone}
                </a>
                {contactConfig.phoneSecondary && (
                  <a href={`tel:${contactConfig.phoneSecondary}`} className="text-white/60 text-sm font-light hover:text-white transition-colors block">
                  📞 {contactConfig.phoneSecondary}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">Pages</h4>
            <nav className="flex flex-col gap-4">
              {['/', '/services', '/gallery', '/about', '/contact'].map((to, i) => (
                <Link key={to} to={to} className="text-white/70 hover:text-white transition-colors font-light text-sm">
                  {['Home', 'Services', 'Gallery', 'About', 'Contact'][i]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">Location</h4>
            <div className="flex gap-3 items-start">
              <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Rampore Bank Colony,<br />Manahalli Rd, Gumpa,<br />Bidar, Karnataka 585403
              </p>
            </div>
            {salonData.openingHours.status && (
              <p className="text-white/40 text-xs mt-6 font-light">{salonData.openingHours.status}</p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">© {year} {salonData.name}. All rights reserved.</p>
          <p className="text-white/20 text-xs">Bidar, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
