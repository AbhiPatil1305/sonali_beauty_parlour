import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { salonData } from '../data/salon';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-6 block">About {salonData.shortName}</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8 leading-tight">More Than Beauty.</h1>
            <p className="text-text/70 text-xl md:text-2xl font-light leading-relaxed">
              A space dedicated to beauty, care and confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Block */}
      <section className="px-6 mb-24">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[21/9] md:aspect-[21/7] rounded-3xl overflow-hidden bg-secondary relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Salon Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary"
            >
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">Our Story</h2>
              <div className="space-y-6 text-text/80 font-light leading-relaxed text-lg">
                <p>
                  Sonali Herbal Beauty Parlour is a VLCC-certified beauty studio 
                  specializing in professional makeup, hairstyles, and mehndi. 
                  We bring expertise, passion, and personal care to every service.
                </p>
                <p>
                  Located in the heart of Bidar, we have built our reputation on 
                  providing a comfortable, welcoming environment where our clients 
                  can truly relax and feel their best.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider">VLCC Certified</span>
                  <span className="px-4 py-1.5 rounded-full bg-secondary text-primary/70 text-xs font-medium uppercase tracking-wider">Professional Makeup</span>
                  <span className="px-4 py-1.5 rounded-full bg-secondary text-primary/70 text-xs font-medium uppercase tracking-wider">Hairstyles</span>
                  <span className="px-4 py-1.5 rounded-full bg-secondary text-primary/70 text-xs font-medium uppercase tracking-wider">Mehndi</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-16 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'Personal Care', desc: 'Every customer should feel seen and comfortable.' },
              { num: '02', title: 'Attention to Detail', desc: 'Beauty services presented with care and precision.' },
              { num: '03', title: 'Your Confidence', desc: 'The experience should leave customers feeling confident and refreshed.' },
            ].map((item, i) => (
              <motion.div 
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-accent font-serif text-2xl mb-4">{item.num}</span>
                <h3 className="text-2xl font-serif text-primary mb-4">{item.title}</h3>
                <p className="text-text/70 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-primary text-background text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif italic mb-10 text-white leading-tight">"Beauty is personal."</h2>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
              We believe in enhancing your natural style with care, comfort, and deep personal attention. Every detail is curated for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-24 bg-white border-b border-secondary/30">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl font-serif text-primary mb-4">{salonData.rating} <span className="text-accent text-5xl">★</span></div>
            <p className="text-xl text-text/80 mb-8 uppercase tracking-widest text-sm font-medium">{salonData.reviewCount} {salonData.ratingSource} Reviews</p>
            <h3 className="text-2xl font-serif text-primary mb-2">{salonData.name}</h3>
            <p className="text-text/60 font-light">{salonData.location}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-background text-center px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Experience it yourself.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="px-8 py-4 bg-primary text-background rounded-full text-center hover:bg-primary/90 transition-all touch-target font-medium tracking-wide">
              Explore Services
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-primary/20 text-primary rounded-full text-center hover:bg-secondary/50 transition-colors touch-target font-medium tracking-wide">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
