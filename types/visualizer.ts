export enum AppStep {
  UPLOAD = 'UPLOAD',
  DOOR_SELECTION = 'DOOR_SELECTION',
  PATTERN_SELECTION = 'PATTERN_SELECTION',
  FINISH_SELECTION = 'FINISH_SELECTION',
  COLOR_SELECTION = 'COLOR_SELECTION',
  PREVIEW = 'PREVIEW',
}

export enum DoorType {
  ROLLER = 'Roller Door',
  SECTIONAL = 'Sectional Door',
}

export interface ColorOption {
  name: string;
  hex: string;
}

export interface DoorPattern {
  id: string;
  name: string;
  description: string; // Detailed description for the AI
  thumbUrl: string;    // URL for the UI grid
  refUrl: string;      // High-res URL for the AI reference
}

export interface GenerationState {
  originalImage: string | null;
  generatedImage: string | null;
  isGenerating: boolean;
  error: string | null;
}

export interface DesignPreset {
  id: string;
  name: string;
  url: string;
  type: 'double' | 'single';
}

export interface LeadDetails {
  name: string;
  address: string;
  email: string;
  phone: string;
}

declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio?: AIStudio;
  }
}
