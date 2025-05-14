export interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface NavItem {
  title: string;
  path: string;
}
