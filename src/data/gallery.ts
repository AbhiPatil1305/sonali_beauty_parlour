export type GalleryCategory = 'Hair' | 'Makeup' | 'Bridal' | 'Skin' | 'Nails';

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: GalleryCategory;
  description?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Bridal Hair Styling',
    category: 'Hair'
  },
  {
    id: 'gal-2',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Soft Glam Makeup',
    category: 'Makeup'
  },
  {
    id: 'gal-3',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Traditional Bridal',
    category: 'Bridal'
  },
  {
    id: 'gal-4',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Glowing Skin Care',
    category: 'Skin'
  },
  {
    id: 'gal-5',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Threading & Brows',
    category: 'Skin'
  },
  {
    id: 'gal-6',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Salon Experience',
    category: 'Skin'
  }
];
