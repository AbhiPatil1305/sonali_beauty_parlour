import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { services } from '../data/services';
import { serviceCategories } from '../data/services';
import type { Service, ServiceCategory } from '../data/services';
import ServiceCard from '../components/common/ServiceCard';
import ServiceDetailsSheet from '../services/ServiceDetailsSheet';
import { Search, X } from 'lucide-react';
import clsx from 'clsx';

type FilterCategory = ServiceCategory | 'All';

export default function Services() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Read ?category= from URL on mount
  useEffect(() => {
    const cat = searchParams.get('category') as FilterCategory | null;
    if (cat && (serviceCategories as readonly string[]).includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      if (service.available === false) return false;
      const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        service.name.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4 block">What We Offer</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6">Our Services</h1>
          <p className="text-text/70 max-w-2xl text-lg font-light leading-relaxed">
            Explore our thoughtfully curated beauty services. From expert hair styling to relaxing skin care, experience personalized attention.
          </p>
        </motion.div>

        {/* Search — full width, above filters */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={18} className="text-primary/40" />
          </div>
          <input
            type="text"
            placeholder="Search a service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-4 rounded-2xl border border-secondary bg-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent shadow-sm transition-all text-primary placeholder:text-primary/40"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 inset-y-0 flex items-center text-primary/40 hover:text-primary transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category pills — horizontal scroll */}
        <div className="flex overflow-x-auto hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 gap-2.5 pb-2 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={clsx(
              "whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all border touch-target shrink-0",
              activeCategory === 'All'
                ? "bg-primary text-background border-primary"
                : "bg-white text-primary/70 border-secondary hover:border-primary/20"
            )}
          >
            All
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all border touch-target shrink-0",
                activeCategory === cat
                  ? "bg-primary text-background border-primary"
                  : "bg-white text-primary/70 border-secondary hover:border-primary/20"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Active filter badge */}
        {activeCategory !== 'All' && (
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm text-text/60 font-light">Showing:</span>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/60 rounded-full text-sm text-primary font-medium">
              {activeCategory}
              <button onClick={() => setActiveCategory('All')} className="hover:text-accent transition-colors">
                <X size={14} />
              </button>
            </div>
            <span className="text-sm text-text/40">{filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}</span>
          </div>
        )}

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map(service => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={service.id}
              >
                <ServiceCard service={service} onClick={setSelectedService} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4 text-primary/30">
              <Search size={24} />
            </div>
            <h3 className="text-xl font-serif text-primary mb-2">No services found</h3>
            <p className="text-primary/50 font-light max-w-sm mb-8">
              Try adjusting your filters or search term.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="px-8 py-3 rounded-full border border-primary/20 text-primary hover:bg-secondary/50 transition-colors text-sm tracking-wide"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      <ServiceDetailsSheet
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
