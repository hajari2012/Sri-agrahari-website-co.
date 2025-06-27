
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection id={NAV_LINKS.find(link => link.name === 'About Us')?.id} />
        <ServicesSection id={NAV_LINKS.find(link => link.name === 'Services')?.id} />
        <ProductsSection id={NAV_LINKS.find(link => link.name === 'Products')?.id} />
        <TestimonialsSection id={NAV_LINKS.find(link => link.name === 'Testimonials')?.id} />
        <GallerySection id={NAV_LINKS.find(link => link.name === 'Gallery')?.id} />
        <ContactUsSection id={NAV_LINKS.find(link => link.name === 'Contact Us')?.id} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
