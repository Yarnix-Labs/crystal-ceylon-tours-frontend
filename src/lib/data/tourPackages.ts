/** Destination summary from tour package day (API returns id, title, slug) */
export interface DayDestinationRef {
  id: number;
  title: string;
  slug: string;
}

/** Thing-to-do summary from tour package day (API returns id, title, slug) */
export interface DayThingToDoRef {
  id: number;
  title: string;
  slug: string;
}

export interface DayItinerary {
  id: number;
  dayNumber: number;
  location: string;
  topic: string;
  subTopic?: string;
  image?: string;
  description?: string;
  mealPlan?: string;
  accommodation: boolean;
  hotelName?: string;
  hotelLocation?: string;
  roomType?: string;
  /** Populated by API when fetching tour package by id/slug */
  destinations?: DayDestinationRef[];
  thingsToDo?: DayThingToDoRef[];
}

export interface TourPackage {
  id: number;
  name: string;
  tourRefNumber: string;
  slug: string;
  heroImage: string;
  shortDescription: string;
  description: string;
  price: number;
  packageType: string;
  minPeople: number;
  totalDays: number;
  packageDuration: string;
  extraDetails?: string;
  includes?: string[];
  excludes?: string[];
  tags?: string[];
  status: string;
  days: DayItinerary[];
  // Legacy fields for backward compatibility (optional)
  packageDescription?: string;
  vision?: {
    title: string;
    description: string;
    image: string;
  };
}

export const tourPackages: TourPackage[] = [];

export const getTourPackageBySlug = (slug: string): TourPackage | undefined => {
  return tourPackages.find(pkg => pkg.slug === slug);
};
