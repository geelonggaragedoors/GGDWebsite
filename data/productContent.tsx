import { ProductContent } from './contentTypes';
import { RESIDENTIAL_CONTENT } from './content/residential';
import { COMMERCIAL_CONTENT } from './content/commercial';
import { OPENERS_CONTENT } from './content/openers';
import { ACCESSORIES_CONTENT } from './content/accessories';
import { ABOUT_CONTENT } from './content/about';
import { SERVICE_CONTENT } from './content/service';
import { GALLERY_CONTENT } from './content/gallery';
import { SEO_CONTENT } from './content/seo';

// Re-export type for consumers
export type { ProductContent };

// Aggregate all content into a single object for easy lookup by key
export const PRODUCT_CONTENT: Record<string, ProductContent> = {
  ...RESIDENTIAL_CONTENT,
  ...COMMERCIAL_CONTENT,
  ...OPENERS_CONTENT,
  ...ACCESSORIES_CONTENT,
  ...ABOUT_CONTENT,
  ...SERVICE_CONTENT,
  ...GALLERY_CONTENT,
  ...SEO_CONTENT
};
