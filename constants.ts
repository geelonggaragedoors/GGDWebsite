import { Product, NavItem } from './types';

export const IMAGES = {
  LOGO: "/logo.jpeg",
  GOOGLE_ICON: "https://ptdoors.com.au/wp-content/plugins/wp-review-slider-pro/public/partials/imgs/google_small_icon.svg",
  HERO_SLIDES: [
    "https://ptdoors.com.au/wp-content/uploads/2023/09/home-3.jpg",
    "https://ptdoors.com.au/wp-content/uploads/2023/10/home-4.jpg",
    "https://ptdoors.com.au/wp-content/uploads/2023/09/home-2.jpg",
    "https://ptdoors.com.au/wp-content/uploads/2023/09/home-1.jpg"
  ]
};

export const PRODUCT_CARDS: Product[] = [
  {
    title: "ROLLER GARAGE DOORS",
    image: "/images/Roller_Doors.jpg",
    link: "#"
  },
  {
    title: "SECTIONAL GARAGE DOORS",
    image: "/images/Sectional_Doors.jpg",
    link: "#"
  },
  {
    title: "TILT GARAGE DOORS",
    image: "/images/Tilt_Doors.jpg",
    link: "#"
  },
  {
    title: "CEDAR GARAGE DOORS",
    image: "/images/Cedar_Doors.jpg",
    link: "#"
  },
  {
    title: "COMMERCIAL GARAGE DOORS",
    image: "/images/Commercial_Doors.jpg",
    link: "#"
  },
  {
    title: "GARAGE DOOR ACCESSORIES",
    image: "/images/Garage_Door_Accessories.jpg",
    link: "#"
  },
  {
    title: "GARAGE DOOR OPENERS",
    image: "/images/garage-door-openers-home-600x600.jpg",
    link: "#"
  }
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: "RESIDENTIAL DOORS",
    href: "/residential-garage-doors/",
    hasDropdown: true,
    subItems: [
      { label: "Buying A Garage Door", href: "/buying-a-garage-door/" },
      { label: "Roller Garage Doors", href: "/roller-garage-doors/" },
      { label: "Sectional Garage Doors", href: "/sectional-garage-doors/" },
      { label: "Tilt Garage Doors", href: "/tilt-garage-doors/" },
      { label: "Danmar Insulated Garage Doors", href: "/danmar-insulated-garage-doors/" },
      { label: "Cedar Garage Doors", href: "/cedar-garage-doors/" },
      { label: "Garage Door Safety", href: "/garage-door-safety/" },
      { label: "Garage Door Maintenance", href: "/garage-door-maintenance/" },
      { label: "Gliderol Garage Doors", href: "/gliderol-garage-doors/" },
      { label: "Signature Custom Garage Doors", href: "/signature-custom-garage-doors/" }
    ]
  },
  {
    label: "COMMERCIAL DOORS",
    href: "/commercial-garage-doors/",
    hasDropdown: true,
    subItems: [
      { label: "Rapid Roller Doors", href: "/rapid-roller-doors/" },
      { label: "Self Storage Roller Doors", href: "/self-storage-roller-doors/" },
      { label: "Body Corporate & Strata Managed Doors", href: "/body-corporate-strata-managed-doors/" },
      { label: "Commercial & Industrial Roller Doors & Shutters", href: "/commercial-industrial-roller-doors-shutters/" },
      { label: "Car Park Doors", href: "/car-park-doors/" },
      { label: "Commercial & Industrial Garage Door Repairs & Maintenance", href: "/commercial-industrial-garage-door-repairs-maintenance-and-services/" }
    ]
  },
  {
    label: "OPENERS",
    href: "/garage-doors-openers/",
    hasDropdown: true,
    subItems: [
      { label: "Automate", href: "/automate/" },
      { label: "Merlin Garage Doors", href: "/merlin-garage-doors/" },
      { label: "Remote Controllers", href: "/garage-door-remote-control/" },
      { label: "Roller Door Openers", href: "/roller-garage-door-openers/" },
      { label: "Sectional/Tilt Door Openers", href: "/sectional-tilt-garage-door-openers/" },
      { label: "Commercial Door Openers", href: "/commercial-door-openers/" }
    ]
  },
  {
    label: "DOOR VISUALISER",
    href: "/visualizer",
    hasDropdown: false
  },
  {
    label: "SHOP PARTS",
    href: "https://geelonggaragedoors.com/",
    hasDropdown: false
  },
  {
    label: "ACCESSORIES",
    href: "/garage-door-accessories/",
    hasDropdown: true,
    subItems: [
      { label: "Automate", href: "/automate/" },
      { label: "Remote Controllers", href: "/garage-door-remote-control/" },
      { label: "Cleverseal COBRA", href: "/cleverseal-cobra/" },
      { label: "Cleverseal Door Dam", href: "/cleverseal-door-dam/" },
      { label: "Cleverseal Viper", href: "/cleverseal-viper-sectional-garage-door-seal/" },
      { label: "Cleverseal Top and Side Seal", href: "/cleverseal-top-and-side-seal/" },
      { label: "ThermaDoor Garage Door Insulation", href: "/thermadoor-garage-door-insulation/" },
      { label: "Merlin Battery Backup", href: "/merlin-battery-backup/" },
      { label: "Merlin myQ Connectivity Bundle", href: "/merlin-myq-connectivity-bundle/" },
      { label: "Merlin myQ LED Light", href: "/merlin-myq-led-light/" }
    ]
  },
  {
    label: "REPAIRS & SERVICE",
    href: "/garage-doors-repairs-service/",
    hasDropdown: true,
    subItems: [
      { label: "Garage Door Safety", href: "/garage-door-safety/" },
      { label: "Garage Door Maintenance", href: "/garage-door-maintenance/" },
      { label: "Garage Door Springs Repairs & Service", href: "/garage-door-springs-repairs-service/" }
    ]
  },
  {
    label: "GALLERY",
    href: "/gallery/",
    hasDropdown: true,
    subItems: [
      { label: "Photos", href: "/photos/" },
      { label: "Videos", href: "/garage-door-videos/" },
      { label: "Before & After Photos", href: "/before-after-photo-gallery/" }
    ]
  },
  {
    label: "TESTIMONIALS",
    href: "/garage-door-reviews/",
    hasDropdown: false
  },
  {
    label: "ABOUT",
    href: "/about/",
    hasDropdown: true,
    subItems: [
      { label: "Our Story", href: "/our-story/" },
      { label: "Contact Us", href: "/contact-us/" },
      { label: "Display Centre", href: "/display-centre-2/" },
      { label: "Community", href: "/community/" },
      { label: "Careers", href: "/careers/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Learning Hub", href: "/blog/" },
      { label: "Warranties", href: "/garage-door-warranties/" },
      { label: "Insurances", href: "/insurances/" },
      { label: "Code of Conduct", href: "/code-of-conduct/" },
      { label: "Privacy Policy", href: "/privacy-policy/" }
    ]
  }
];

export const SYSTEM_INSTRUCTION = `You are the virtual assistant for Geelong Garage Doors, a professional Garage Door and Gate company in Geelong, Australia.
Your goal is to assist customers with inquiries about garage doors, repairs, installations, and quotes.

Key Information about Geelong Garage Doors:
- Phone: (03) 5221 9222
- Service: 24 Hour Emergency Service available.
- Products: Roller Doors, Sectional Doors, Tilt Doors, Cedar Doors, Commercial Doors.
- Reputation: 5 star reviews and award winning business.
- Location: 31 Gordon Ave, Geelong West VIC 3218.

Tone: Professional, helpful, knowledgeable, and friendly.
If asked about prices, suggest requesting a quote as every installation is custom.
`;