export interface QuickFact {
  label: string;
  value: string;
}

export interface DetailedSection {
  title?: string;
  content: string[];
}

export interface KeyHighlight {
  title: string;
  description: string;
} 

export interface Destination {
  id: number;
  title: string;              // API: title
  slug: string;
  excerpt: string;            // API: excerpt
  content: string;
  coverImage: string;         // API: coverImage
  images: string[];
  tags: string[];
  location: string;           // API: location
  status: "PUBLISHED" | "DRAFT";
  publishedAt: string;
  bestTime: string;            // API: bestTime
  tourCount: string
  views: number;
  keyHighlights: KeyHighlight[] | null;         // API: keyHighlights
  explorerNote: string;          // API: explorerNote
  createdAt: string;
  updatedAt: string;
}

export const destinations: Destination[] = [];

export const getDestinationBySlug = (slug: string) => {
  return destinations.find(d => d.slug === slug);
};
