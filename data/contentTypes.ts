import React from 'react';

export interface ProductContent {
  title: string;
  intro: string;
  description: React.ReactNode;
  features: { title: string; text: string }[];
  techSpecs?: Record<string, string>;
  colours?: string[];
  maintenance?: string[];
  youtubeVideoId?: string;
  downloads?: { label: string; url: string; type?: string; size?: string }[];
  supplierLinks?: { label: string; url: string }[];
  internalLinks?: { label: string; url: string; image?: string }[];
}
