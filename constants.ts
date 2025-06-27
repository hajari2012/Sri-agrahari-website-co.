import type { NavLink, ServiceItem, ProductItem, GalleryImage } from './types';
import { BriefcaseIcon, TruckIcon, SparklesIcon, ScaleIcon } from './components/icons/FeatureIcons'; 

export const BUSINESS_NAME_PRIMARY = "New Agrahari Trading Company";
export const BUSINESS_NAME_SECONDARY = "Sri Agrahari Trading Company";
export const OWNER_NAME = "Hajari Agrahari";
export const OWNER_NAME_HINDI = "हजारी अग्रहरि";
export const TAGLINE = "विश्वसनीय नाम, श्रेष्ठ गुणवत्ता";

export const CONTACT_INFO = {
  phone: "9451929251",
  email: "info@hajariagrahari.com", // Placeholder email
  address: "Ragadganj, Siddharth Nagar, Uttar Pradesh",
  whatsappLink: "https://wa.me/919451929251",
  phoneLink: "tel:+919451929251",
  emailLink: "mailto:info@hajariagrahari.com",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Ragadganj+Siddharth+Nagar+Uttar+Pradesh" // Generic link
};

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About Us', href: '#about', id: 'about' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'Products', href: '#products', id: 'products' },
  { name: 'Gallery', href: '#gallery', id: 'gallery' },
  { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { name: 'Contact Us', href: '#contact', id: 'contact' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    icon: <SparklesIcon className="w-12 h-12 text-green-600" />,
    title: "Rice Bran Collection",
    description: "Direct collection of raw rice bran from rice mill machine operators."
  },
  {
    icon: <BriefcaseIcon className="w-12 h-12 text-green-600" />,
    title: "Bran Filtering & Separation",
    description: "State-of-the-art plant for filtering and separating bran into powder, khandi, and bhusi."
  },
  {
    icon: <ScaleIcon className="w-12 h-12 text-green-600" />,
    title: "Wholesale Supply",
    description: "Reliable wholesale supply of processed rice bran to solvent factories."
  },
  {
    icon: <TruckIcon className="w-12 h-12 text-green-600" />,
    title: "Logistics & Quick Delivery",
    description: "Efficient transportation using our own logistics for prompt delivery."
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    image: "https://picsum.photos/seed/ricebranpowder/400/300",
    name: "Rice Bran Powder",
    description: "Finely processed rice bran powder, ideal for various industrial applications."
  },
  {
    image: "https://picsum.photos/seed/ricebrankhandi/400/300",
    name: "Rice Bran Khandi",
    description: "High-quality rice bran khandi, carefully separated for optimal use."
  },
  {
    image: "https://picsum.photos/seed/ricebranbhusi/400/300",
    name: "Rice Bran Bhusi",
    description: "Nutrient-rich rice bran bhusi, a valuable byproduct of our processing."
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "https://picsum.photos/seed/plant1/600/400", alt: "Filter Plant Facility" },
  { id: 2, src: "https://picsum.photos/seed/fieldwork1/600/400", alt: "Rice Bran Collection in Field" },
  { id: 3, src: "https://picsum.photos/seed/transport1/600/400", alt: "Logistics Truck" },
  { id: 4, src: "https://picsum.photos/seed/processedbran/600/400", alt: "Processed Rice Bran" },
  { id: 5, src: "https://picsum.photos/seed/teamwork/600/400", alt: "Team at Work" },
  { id: 6, src: "https://picsum.photos/seed/loadingdock/600/400", alt: "Loading Dock" },
];

export const SEO_KEYWORDS = [
  "Rice Bran Trader in UP",
  "Best Solvent Supply Bran",
  "Trusted Field Supplier in ITWA DUMARIYA GANJ",
  "Hajari Agrahari Rice Bran",
  "New Agrahari Trading Company",
  "Sri Agrahari Trading Company",
  "Rice Bran Processing Uttar Pradesh"
];
