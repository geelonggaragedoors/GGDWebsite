export interface Product {
  title: string;
  image: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: { label: string; href: string }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}