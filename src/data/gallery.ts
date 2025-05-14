import { GalleryItem } from '../types';
import {
  HOODIE_IMG,
  TRACKSUIT_IMG,
  JEANS_IMG,
  PUFFER_IMG,
  GALLERY_1,
  GALLERY_2,
  GALLERY_3,
  GALLERY_4,
} from '../assets/images';

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Premium Hoodies',
    image: HOODIE_IMG,
    category: 'hoodies',
  },
  {
    id: 2,
    title: 'Stylish Tracksuits',
    image: TRACKSUIT_IMG,
    category: 'tracksuits',
  },
  {
    id: 3,
    title: 'Quality Denim',
    image: JEANS_IMG,
    category: 'jeans',
  },
  {
    id: 4,
    title: 'Insulated Puffer Jackets',
    image: PUFFER_IMG,
    category: 'jackets',
  },
  {
    id: 5,
    title: 'Custom Designs',
    image: GALLERY_1,
    category: 'custom',
  },
  {
    id: 6,
    title: 'Sportswear Collection',
    image: GALLERY_2,
    category: 'sportswear',
  },
  {
    id: 7,
    title: 'Fashion Forward Pieces',
    image: GALLERY_3,
    category: 'fashion',
  },
  {
    id: 8,
    title: 'Casual Collection',
    image: GALLERY_4,
    category: 'casual',
  },
];
