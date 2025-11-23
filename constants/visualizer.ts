import { ColorOption, DesignPreset, DoorType, DoorPattern } from '../types/visualizer';

export const COLORBOND_COLORS: ColorOption[] = [
  { name: 'Dover White', hex: '#F0F2ED' },
  { name: 'Classic Cream', hex: '#E9DCB8' },
  { name: 'Surfmist', hex: '#E4E2D5' },
  { name: 'Sandbank', hex: '#D4C6A0' },
  { name: 'Paperbark', hex: '#CABFA4' },
  { name: 'Stone', hex: '#948D7F' },
  { name: 'Dune', hex: '#B1ADA3' },
  { name: 'Shale Grey', hex: '#BDBFBA' },
  { name: 'Southerly', hex: '#D0D0CE' },
  { name: 'Evening Haze', hex: '#C5C2AA' },
  { name: 'Cove', hex: '#A59F8A' },
  { name: 'Pale Eucalypt', hex: '#7C846A' },
  { name: 'Mangrove', hex: '#737562' },
  { name: 'Cottage Green', hex: '#304C3C' },
  { name: 'Woodland Grey', hex: '#4B4C46' },
  { name: 'Gully', hex: '#857E73' },
  { name: 'Wallaby', hex: '#7F7C78' },
  { name: 'Jasper', hex: '#6C6153' },
  { name: 'Terrain', hex: '#67432E' },
  { name: 'Manor Red', hex: '#5E1D0E' },
  { name: 'Ironstone', hex: '#3E434C' },
  { name: 'Deep Ocean', hex: '#364152' },
  { name: 'Windspray', hex: '#888B8A' },
  { name: 'Bluegum', hex: '#969799' },
  { name: 'Basalt', hex: '#6D6C6E' },
  { name: 'Monument', hex: '#323233' },
  { name: 'Night Sky', hex: '#000000' },
];

export const PRESET_HOUSES: DesignPreset[] = [
  // Double Garages - Modern Australian Styles
  { id: 'modern-brick', name: 'Modern Brick', url: '/presets/red-brick-home.webp', type: 'double' },
  { id: 'contemporary', name: 'Contemporary Estate', url: '/presets/contemporary.webp', type: 'double' },
  { id: 'suburban-render', name: 'Suburban Render', url: '/presets/Suburban-Render.webp', type: 'double' },
  { id: 'family-home', name: 'Family Home', url: '/presets/Family-Home.webp', type: 'double' },

  // Single Garages - Classic Australian Styles
  { id: 'weatherboard', name: 'Aus Weatherboard', url: '/presets/Aus-Weatherboard.webp', type: 'single' },
  { id: 'classic-brick', name: 'Classic Brick', url: '/presets/Classic-Brick.webp', type: 'single' },
  { id: 'cottage', name: 'Cozy Cottage', url: '/presets/Cozy-Cottage.webp', type: 'single' },
  { id: 'bungalow', name: 'Bungalow', url: '/presets/Bungalow.webp', type: 'single' },
];

// Specific Door Patterns (UI and AI Reference)
export const DOOR_PATTERNS: Record<DoorType, DoorPattern[]> = {
  [DoorType.ROLLER]: [
    {
      id: 'traditional',
      name: 'Traditional',
      description: 'Classic corrugated roller door with standard horizontal ribs approx 2.5cm spacing. Deep profile.',
      thumbUrl: 'https://images.unsplash.com/photo-1517581177697-0005aac4aa69?auto=format&fit=crop&w=300&q=60',
      refUrl: 'https://images.unsplash.com/photo-1517581177697-0005aac4aa69?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'squareline',
      name: 'Squareline Deluxe',
      description: 'Modern roller door with a flatter curtain profile and wider spacing between ribs compared to traditional.',
      thumbUrl: 'https://images.unsplash.com/photo-1621501623440-334f39df4749?auto=format&fit=crop&w=300&q=60',
      refUrl: 'https://images.unsplash.com/photo-1621501623440-334f39df4749?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'neo',
      name: 'Neo',
      description: 'Contemporary roller door, ultra smooth finish with very minimal ribbing. Sleek appearance.',
      thumbUrl: 'https://images.unsplash.com/photo-1629079447841-d642f3157119?auto=format&fit=crop&w=300&q=60',
      refUrl: 'https://images.unsplash.com/photo-1629079447841-d642f3157119?auto=format&fit=crop&w=800&q=80'
    }
  ],
  [DoorType.SECTIONAL]: [
    {
      id: 'nullarbor',
      name: 'Nullarbor',
      description: 'Flat panel sectional door. Minimalist, completely smooth panels with no embossing or patterns. Modern look.',
      thumbUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=300&q=60',
      refUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'seville',
      name: 'Seville',
      description: 'Sectional door with horizontal raised brick-like embossing. Fine textured lines across wide panels.',
      thumbUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=60', 
      refUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'madrid',
      name: 'Madrid',
      description: 'Sectional door with a sleek V-groove design running horizontally across the top of each panel.',
      thumbUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=60',
      refUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'grange',
      name: 'Grange',
      description: 'Traditional rectangular embossed panel design. Features small rectangular squares raised on the surface.',
      thumbUrl: 'https://images.unsplash.com/photo-1623633773342-69a8a5775e45?auto=format&fit=crop&w=300&q=60',
      refUrl: 'https://images.unsplash.com/photo-1623633773342-69a8a5775e45?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'statesman',
      name: 'Statesman',
      description: 'Elegant sectional door with recessed rectangular stampings, giving a raised panel effect.',
      thumbUrl: 'https://images.unsplash.com/photo-1600596542815-9ad4c5929538?auto=format&fit=crop&w=300&q=60',
      refUrl: 'https://images.unsplash.com/photo-1600596542815-9ad4c5929538?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4-panel',
      name: '4-Panel',
      description: 'Sectional door consisting of 4 large, equal-height horizontal panels.',
      thumbUrl: 'https://images.unsplash.com/photo-1505409559755-37424428dc50?auto=format&fit=crop&w=300&q=60',
      refUrl: 'https://images.unsplash.com/photo-1505409559755-37424428dc50?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2-panel',
      name: '2-Panel',
      description: 'Sectional door featuring two wide horizontal panels.',
      thumbUrl: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=300&q=60', 
      refUrl: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3-panel',
      name: '3-Panel',
      description: 'Sectional door featuring three horizontal panels.',
      thumbUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=300&q=60',
      refUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '25-50-25',
      name: '25:50:25',
      description: 'Sectional door with a distinctive panel arrangement: narrower top and bottom panels with a wider central panel.',
      thumbUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=60',
      refUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    }
  ]
};
