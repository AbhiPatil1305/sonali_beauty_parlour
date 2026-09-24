export type ServiceCategory =
  | 'Hair Care'
  | 'Skin Care'
  | 'Facial'
  | 'Threading'
  | 'Waxing'
  | 'Manicure'
  | 'Pedicure'
  | 'Nails'
  | 'Makeup'
  | 'Bridal'
  | 'Pre-Bridal'
  | 'Body Care'
  | 'Hair Treatments'
  | 'Special Occasion'
  | 'Packages';

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  subcategory?: string;
  description: string;
  image?: string;
  price?: number | null;
  priceLabel?: string;
  duration?: string;
  featured?: boolean;
  available?: boolean;
  popular?: boolean;
  tags?: string[];
  includes?: string[];
}

export const serviceCategories: ServiceCategory[] = [
  'Hair Care',
  'Skin Care',
  'Facial',
  'Threading',
  'Waxing',
  'Manicure',
  'Pedicure',
  'Nails',
  'Makeup',
  'Bridal',
  'Pre-Bridal',
  'Body Care',
  'Hair Treatments',
  'Special Occasion',
  'Packages'
];

export const services: Service[] = [
  // Hair Care
  {
    id: 'hair-cut-1',
    name: 'Premium Haircut & Styling',
    description: 'A personalized haircut tailored to your face shape and lifestyle.',
    category: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true,
    popular: true,
    featured: true,
  },
  {
    id: 'hair-spa-1',
    name: 'Relaxing Hair Spa',
    description: 'Relax and refresh your hair with a nourishing care session designed for a smoother, healthier-looking finish.',
    category: 'Hair Treatments',
    available: true,
    popular: true,
  },
  // Skin Care / Facial
  {
    id: 'facial-glow',
    name: 'Glow Facial Treatment',
    description: 'Deep cleansing facial designed to restore your natural glow and hydrate your skin.',
    category: 'Facial',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true,
    featured: true,
  },
  // Makeup
  {
    id: 'makeup-party',
    name: 'Party Makeup',
    description: 'Elegant and long-lasting makeup for your special occasions.',
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true,
  },
  // Bridal
  {
    id: 'bridal-complete',
    name: 'Complete Bridal Package',
    description: 'Comprehensive bridal beauty care including hair, makeup, and draping.',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true,
    featured: true,
    includes: ['Bridal Makeup', 'Bridal Hairstyling', 'Saree Draping', 'Jewellery Setting']
  },
  // Threading
  {
    id: 'thread-eyebrow',
    name: 'Eyebrow Threading',
    description: 'Precise and clean eyebrow shaping to enhance your features.',
    category: 'Threading',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true,
    popular: true,
  },
  // Add an unavailable one to show it filters out
  {
    id: 'waxing-full-body',
    name: 'Full Body Waxing',
    description: 'Complete body waxing service.',
    category: 'Waxing',
    available: false,
  }
];
