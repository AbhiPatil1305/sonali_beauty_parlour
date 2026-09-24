import { serviceCategories } from '../data/services';
import type { ServiceCategory } from '../data/services';
import clsx from 'clsx';

interface ServiceCategoriesProps {
  activeCategory: ServiceCategory | 'All';
  onSelect: (category: ServiceCategory | 'All') => void;
}

export default function ServiceCategories({ activeCategory, onSelect }: ServiceCategoriesProps) {
  return (
    <div className="flex overflow-x-auto hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 gap-3 pb-4">
      <button
        onClick={() => onSelect('All')}
        className={clsx(
          "whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-colors border touch-target",
          activeCategory === 'All' 
            ? "bg-primary text-background border-primary" 
            : "bg-white text-primary/70 border-secondary hover:border-primary/30"
        )}
      >
        All Services
      </button>
      {serviceCategories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={clsx(
            "whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-colors border touch-target",
            activeCategory === category 
              ? "bg-primary text-background border-primary" 
              : "bg-white text-primary/70 border-secondary hover:border-primary/30"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
