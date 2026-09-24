export interface ServiceCategoryCard {
  id: string;
  title: string;
  description: string;
  image: string;
  filter: string; // maps to ServiceCategory
}

export const categoryCards: ServiceCategoryCard[] = [
  {
    id: 'cat-hair',
    title: 'Hair Care',
    description: 'Styles, treatments and care designed around your look.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    filter: 'Hair Care',
  },
  {
    id: 'cat-skin',
    title: 'Skin & Facial',
    description: 'Relaxing beauty rituals designed for a refreshed look.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    filter: 'Facial',
  },
  {
    id: 'cat-makeup',
    title: 'Makeup',
    description: 'From natural elegance to special occasion glamour.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    filter: 'Makeup',
  },
  {
    id: 'cat-bridal',
    title: 'Bridal Beauty',
    description: 'Your look, your moment, beautifully prepared.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    filter: 'Bridal',
  },
];
