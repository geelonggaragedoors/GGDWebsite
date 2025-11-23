# Geelong Garage Doors Website Roadmap & Master Checklist

This document serves as the single source of truth for the development, content creation, and SEO optimization of the Geelong Garage Doors website. It tracks the status of every page, defines our quality standards, and links to relevant technical resources.

## 🏆 Quality Standards & Rules ("The 10x Standard")

Every page on this site must meet the following strict criteria before being marked as **[DONE]**:

1.  **Human-Written & Factual**: No generic AI fluff. Content must be specific to Geelong/Surf Coast, reference real industry bodies (AGDA), and specific insurance values ($20M PL).
2.  **Substantial Length**: Minimum 300-500 words of rich content.
3.  **Visual Structure**:
    *   Use **"Red & Blue"** branding consistently (headings, icons).
    *   Include **Tech Specs Tables** for products.
    *   Include **Features Grids** for scannability.
    *   Include **Maintenance Tips** (Monthly/Yearly schedules).
4.  **Rich Media & Interactivity**:
    *   **Downloads**: Direct links to local PDF brochures (no dead links).
    *   **Related Products**: Visual grid at the bottom of every product page.
    *   **Internal Linking**: Contextual links to "Book a Service" or related categories.
5.  **SEO Optimization**:
    *   **Local Keywords**: "Geelong", "Surf Coast", "Torquay", "Bellarine".
    *   **Intent Matching**: Commercial pages focus on "Security/Uptime", Residential on "Aesthetics/Safety".
6.  **Strictly Local Resources**:
    *   All PDFs must be downloaded to `public/downloads/`.
    *   All images must be local (no external hotlinks).
    *   Use `DOWNLOADS` constant in `data/downloads.ts` for consistency.
7.  **Verification Protocol**:
    *   Must search for "Built with high-grade materials..." to ensure no default content remains.
    *   Keys in `PRODUCT_CONTENT` must match `NAV_ITEMS` labels *exactly*.
8.  **Branding Compliance**:
    *   Primary Blue: `#293a8c`
    *   Accent Red: `#ED1C24`
    *   Fonts: Roboto (sans-serif).
9.  **Problem-Centric Research Framework (PQRA)**:
    *   **Problem**: Identify the specific customer pain point (e.g., "Garage too hot", "Springs broken").
    *   **Questions**: Anticipate the specific questions they are asking (e.g., "What is the R-Value?", "How much for emergency repair?").
    *   **Research**: Find technical, factual answers from manufacturers or industry standards (not AI assumptions).
    *   **Answer**: Write the solution clearly, addressing the problem directly with the researched facts.

---

## 🛠️ Technical Resources & File Map

*   **Content Database**: `data/productContent.tsx` (The brain of the site. All text/specs live here).
*   **Downloads Registry**: `data/downloads.ts` (Centralized list of PDF resources).
*   **Page Template**: `components/PageTemplate.tsx` (The layout engine for dynamic pages).
*   **Buying Guide**: `components/BuyingGuide.tsx` (Custom component with unique layout).
*   **Related Products**: `components/RelatedProducts.tsx` (Visual cross-linking component).
*   **Maintenance Schedule**: `components/MaintenanceSchedule.tsx` (Visual service timeline).
*   **Hero Image Generator**: `scripts/generate-heros.js` (Node script to create text-overlay hero images).
    *   *Usage*: `node scripts/generate-heros.js`
*   **Routing**: `App.tsx` (Maps URLs to Components/Templates).

---

## 🗺️ Master Page List & Status

### 🏠 Residential Doors
| Page Name | URL | Status | SEO Focus | Content File |
| :--- | :--- | :--- | :--- | :--- |
| Buying A Garage Door | `/buying-a-garage-door/` | ✅ **DONE** | Buyer's Guide, Checklist | `components/BuyingGuide.tsx` |
| Roller Garage Doors | `/roller-garage-doors/` | ✅ **DONE** | Space-saving, Cost-effective | `data/productContent.tsx` |
| Sectional Garage Doors | `/sectional-garage-doors/` | ✅ **DONE** | Modern, Insulated, Panelift | `data/productContent.tsx` |
| Tilt Garage Doors | `/tilt-garage-doors/` | ✅ **DONE** | Low Headroom, Custom Cladding | `data/productContent.tsx` |
| Cedar Garage Doors | `/cedar-garage-doors/` | ✅ **DONE** | Natural Timber, Custom | `data/productContent.tsx` |
| Danmar Insulated Doors | `/danmar-insulated-garage-doors/` | ✅ **DONE** | Thermal Efficiency, Noise | `data/productContent.tsx` |
| Gliderol Garage Doors | `/gliderol-garage-doors/` | ✅ **DONE** | Continuous Curtain, Reliable | `data/productContent.tsx` |
| Signature Custom Doors | `/signature-custom-garage-doors/` | ✅ **DONE** | Bespoke, Architect Design | `data/content/residential.tsx` |
| Garage Door Safety | `/garage-door-safety/` | ✅ **DONE** | Auto-Reverse, PE Beams | `data/content/service.tsx` |
| Garage Door Maintenance | `/garage-door-maintenance/` | ✅ **DONE** | DIY Tips, Lubrication | `data/content/service.tsx` |

### 🏢 Commercial Doors
| Page Name | URL | Status | SEO Focus | Content File |
| :--- | :--- | :--- | :--- | :--- |
| Commercial Roller/Shutters | `/commercial-industrial-roller-doors-shutters-sydney/` | ✅ **DONE** | Security, Heavy Duty | `data/productContent.tsx` ("Industrial Shutters") |
| Rapid Roller Doors | `/rapid-roller-doors/` | ✅ **DONE** | High Speed, Hygiene | `data/productContent.tsx` |
| Car Park Doors | `/car-park-doors/` | ✅ **DONE** | High Cycle, Ventilation | `data/productContent.tsx` |
| Self Storage Roller Doors | `/self-storage-roller-doors-sydney/` | ✅ **DONE** | Mini-warehouse, Security | `data/productContent.tsx` |
| Body Corporate Doors | `/body-corporate-strata-managed-doors/` | ✅ **DONE** | Strata Management, Reliability | `data/productContent.tsx` |
| Comm. Repairs & Maint. | `/commercial-industrial-garage-door-repairs-maintenance-and-services/` | ✅ **DONE** | Preventative, Contracts | `data/productContent.tsx` |

### 🔌 Openers & Automation
| Page Name | URL | Status | SEO Focus | Content File |
| :--- | :--- | :--- | :--- | :--- |
| Automate Openers | `/automate/` | ✅ **DONE** | Affordable, Simple | `data/productContent.tsx` |
| Merlin Garage Doors | `/merlin-garage-doors/` | ✅ **DONE** | Smart, myQ, Premium | `data/productContent.tsx` |
| Remote Controllers | `/garage-door-remote-control/` | ✅ **DONE** | Replacement, Programming | `data/productContent.tsx` |
| Roller Door Openers | `/roller-garage-door-openers/` | ✅ **DONE** | Specific Motor Specs | `data/content/openers.tsx` |
| Sectional/Tilt Openers | `/sectional-tilt-garage-door-openers/` | ✅ **DONE** | Belt Drive, Quiet | `data/content/openers.tsx` |
| Commercial Door Openers | `/commercial-door-openers/` | ✅ **DONE** | Logic Control, 3-Phase | `data/content/openers.tsx` |

### 🛠️ Accessories
| Page Name | URL | Status | SEO Focus | Content File |
| :--- | :--- | :--- | :--- | :--- |
| Cleverseal COBRA | `/cleverseal-cobra/` | ✅ **DONE** | Brush Seal, Ember Proof | `data/content/accessories.tsx` |
| Cleverseal Door Dam | `/cleverseal-door-dam/` | ✅ **DONE** | Water Barrier, Storms | `data/content/accessories.tsx` |
| Cleverseal Viper | `/cleverseal-viper-sectional-garage-door-seal/` | ✅ **DONE** | Side Seal, UV Stable | `data/content/accessories.tsx` |
| Cleverseal Top & Side | `/cleverseal-top-and-side-seal/` | ✅ **DONE** | Complete Seal | `data/content/accessories.tsx` |
| ThermaDoor Insulation | `/thermadoor-garage-door-insulation/` | ✅ **DONE** | Retrofit Insulation, R-Value | `data/content/accessories.tsx` |
| Merlin Battery Backup | `/merlin-battery-backup/` | ✅ **DONE** | Power Outage, UPS | `data/content/accessories.tsx` |
| Merlin myQ Bundle | `/merlin-myq-connectivity-bundle/` | ✅ **DONE** | Smart Home, WiFi | `data/content/accessories.tsx` |
| Merlin myQ LED Light | `/merlin-myq-led-light/` | ✅ **DONE** | Smart Lighting | `data/content/accessories.tsx` |

### ℹ️ About & Company
| Page Name | URL | Status | SEO Focus | Content File |
| :--- | :--- | :--- | :--- | :--- |
| Our Story | `/sydney-garage-doors-gates-specialists/` | ✅ **DONE** | Local History, Trust | `data/content/about.tsx` |
| Contact Us | `/contact-us/` | ✅ **DONE** | Address, Phone, Map | `components/ContactUs.tsx` |
| Display Centre | `/display-centre-2/` | ✅ **DONE** | Showroom, Samples | `data/content/about.tsx` |
| Community | `/community/` | ✅ **DONE** | Local Employment, Giving Back | `data/content/about.tsx` |
| Careers | `/careers/` | ✅ **DONE** | Jobs, Training, Culture | `data/content/about.tsx` |
| FAQ | `/faq/` | ✅ **DONE** | Common Questions, Costs | `data/content/about.tsx` |
| Learning Hub | `/blog/` | ✅ **DONE** | Education, Guides | `data/content/about.tsx` |
| Warranties | `/garage-door-warranties/` | ✅ **DONE** | Policies, Claims | `data/content/about.tsx` |
| Insurances | `/insurances/` | ✅ **DONE** | PL, WorkCover, Compliance | `data/content/about.tsx` |
| Code of Conduct | `/code-of-conduct/` | ✅ **DONE** | Ethics, AGDA | `data/content/about.tsx` |
| Privacy Policy | `/privacy-policy/` | ✅ **DONE** | APP, Data Protection | `data/content/about.tsx` |

### 🖼️ Galleries & Visuals
| Page Name | URL | Status | SEO Focus | Content File |
| :--- | :--- | :--- | :--- | :--- |
| Photo Gallery | `/photos/` | ✅ **DONE** | Visual Proof | `components/PhotoGallery.tsx` |
| Before & After | `/before-after-photo-gallery/` | ✅ **DONE** | Transformations | `components/BeforeAfterGallery.tsx` |
| Videos | `/garage-door-videos/` | ✅ **DONE** | Demos, Showcases | `data/content/gallery.tsx` |
| Visualizer | `/visualizer` | ✅ **DONE** | Interactive Tool | `components/VisualizerPage.tsx` |

### 🏛️ Pillar / Category Pages
| Page Name | URL | Status | SEO Focus | Content File |
| :--- | :--- | :--- | :--- | :--- |
| Residential Doors | `/residential-garage-doors/` | ✅ **DONE** | Category Overview | `components/PillarPage.tsx` |
| Commercial Doors | `/commercial-garage-doors/` | ✅ **DONE** | Business Solutions | `components/PillarPage.tsx` |
| Openers | `/garage-doors-openers/` | ✅ **DONE** | Automation Hub | `components/PillarPage.tsx` |
| Accessories | `/garage-door-accessories/` | ✅ **DONE** | Add-ons Hub | `components/PillarPage.tsx` |
| Repairs & Service | `/garage-doors-repairs-service/` | ✅ **DONE** | Service Hub | `components/PillarPage.tsx` |
| Gallery | `/gallery/` | ✅ **DONE** | Project Showcase | `components/PillarPage.tsx` |

### 📍 SEO Location Pages (Footer Links)
| Page Name | URL | Status | SEO Focus | Content File |
| :--- | :--- | :--- | :--- | :--- |
| Garage Doors Geelong | `/garage-doors-geelong/` | ✅ **DONE** | Local Ranking (Geelong) | `data/content/seo.tsx` |
| Garage Doors Surf Coast | `/garage-doors-surf-coast/` | ✅ **DONE** | Local Ranking (Torquay/Anglesea) | `data/content/seo.tsx` |
| Garage Doors Bellarine | `/garage-doors-bellarine/` | ✅ **DONE** | Local Ranking (Ocean Grove) | `data/content/seo.tsx` |
| Garage Doors Torquay | `/garage-doors-torquay/` | ✅ **DONE** | Niche Local | `data/content/seo.tsx` |
| Garage Doors Ocean Grove | `/garage-doors-ocean-grove/` | ✅ **DONE** | Niche Local | `data/content/seo.tsx` |

---

## ✅ Project Complete

All planned pages have been created with unique, high-quality, problem-centric content. The site is fully populated.
