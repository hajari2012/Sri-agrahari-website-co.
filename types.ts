import React from 'react';

export interface NavLink {
  name: string;
  href: string;
  id: string;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProductItem {
  image: string;
  name: string;
  description: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
