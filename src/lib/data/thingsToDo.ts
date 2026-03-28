export interface ThingToDo {
  id: number | string;
  slug: string;
  category?: string;
  title: string;
  name?: string;
  tagline?: string;
  overview?: string;
  excerpt?: string;
  location: string;
  duration?: string;
  price?: string;
  ratingCount?: number;
  image?: string;
  purpose:string;
  content: string;
  heroImage?: string;
  coverImage?: string;
  description?: string;
  difficulty?: "Easy" | "Moderate" | "Challenging" | string;
  tags?: string[];
  views?: number;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
 
  highlights?: {
    title: string;
    image: string;
    description: string;
  }[];

  whatsIncluded?: string[];

  experienceHighlight?: {
    image: string;
    title: string;
    description: string;
  }[];

  vision?: {
    image: string;
    title: string;
    description: string;
  }[];
}

export const thingsToDo: ThingToDo[] = [];

export const getThingToDoBySlug = (slug: string): ThingToDo | undefined => {
  return thingsToDo.find(thing => thing.slug === slug);
};
