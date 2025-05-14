import { ProcessStep } from '../types';
import {
  CUTTING_IMG,
  PATTERN_IMG,
  EMBROIDERY_IMG,
  PRINTING_IMG,
  STITCHING_IMG,
  PRESSING_IMG,
  LABELING_IMG,
  PACKING_IMG,
  SHIPPING_IMG,
} from '../assets/images';

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Pattern Creation',
    description: 'Our skilled designers create and refine patterns for each garment style.',
    image: PATTERN_IMG,
  },
  {
    id: 2,
    title: 'Fabric Cutting',
    description: 'Precision cutting of fabric according to patterns for consistent sizing.',
    image: CUTTING_IMG,
  },
  {
    id: 3,
    title: 'Embroidery',
    description: 'Custom embroidery work performed on specialized machines for premium branding.',
    image: EMBROIDERY_IMG,
  },
  {
    id: 4,
    title: 'Printing',
    description: 'High-quality printing of logos and designs using advanced techniques.',
    image: PRINTING_IMG,
  },
  {
    id: 5,
    title: 'Stitching',
    description: 'Expert stitching and assembly by skilled workers with attention to detail.',
    image: STITCHING_IMG,
  },
  {
    id: 6,
    title: 'Steam Pressing',
    description: 'Professional steam pressing for a crisp, finished appearance.',
    image: PRESSING_IMG,
  },
  {
    id: 7,
    title: 'Labeling',
    description: 'Addition of custom neck labels and tags for proper branding.',
    image: LABELING_IMG,
  },
  {
    id: 8,
    title: 'Packaging',
    description: 'Careful packaging of finished items in polybags for protection.',
    image: PACKING_IMG,
  },
  {
    id: 9,
    title: 'Shipping',
    description: 'Secure transportation of finished products to their destination.',
    image: SHIPPING_IMG,
  },
];