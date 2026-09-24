export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number;
  isPlaceholder?: boolean;
}

// Replace these with verified customer reviews when available
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: '[Replace with verified customer review]',
    author: 'Customer Name',
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: 't2',
    quote: '[Replace with verified customer review]',
    author: 'Customer Name',
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: 't3',
    quote: '[Replace with verified customer review]',
    author: 'Customer Name',
    rating: 5,
    isPlaceholder: true,
  },
];
