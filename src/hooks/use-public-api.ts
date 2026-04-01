import { useQuery, useMutation } from '@tanstack/react-query';
import { 
  getPublicTourPacakgesList,
  getPublicTourPackageBySlug,
  getPublicDestinationsList,
  getPublicDestinationBySlug,
  getPublicBlogsList,
  getPublicBlogPostBySlug,
  getPublicBlogs,
  getPublicThingsToDoList,
  getPublicThingToDoBySlug,
  getPublicThingsToDo,
  getPublicGalleryList,
  getPublicReviewsList,
  sendContactMessage,
  subscribeNewsletter,
  createBooking
} from '../api/services/public';
import type { ContactMessage, SubscribePayload } from '../lib/data/contactus';
import type { CreateBooking } from '../lib/data/booking';

// --- Tour Packages ---
export const useTourPackages = (page: number = 1) => {
  return useQuery({
    queryKey: ['tourPackages', page],
    queryFn: () => getPublicTourPacakgesList(page),
  });
};

export const useTourPackageBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['tourPackage', slug],
    queryFn: () => getPublicTourPackageBySlug(slug),
    enabled: !!slug,
  });
};

// --- Destinations ---
export const useDestinations = (page: number = 1) => {
  return useQuery({
    queryKey: ['destinations', page],
    queryFn: () => getPublicDestinationsList(page),
  });
};

export const useDestinationBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['destination', slug],
    queryFn: () => getPublicDestinationBySlug(slug),
    enabled: !!slug,
  });
};

// --- Blogs ---
export const useBlogsList = (page: number = 1) => {
  return useQuery({
    queryKey: ['blogsList', page],
    queryFn: () => getPublicBlogsList(page),
  });
};

export const useBlogBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['blog', slug],
    queryFn: () => getPublicBlogPostBySlug(slug),
    enabled: !!slug,
  });
};

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogsAll'],
    queryFn: () => getPublicBlogs(),
  });
};

// --- Things To Do ---
export const useThingsToDoList = (page: number = 1) => {
  return useQuery({
    queryKey: ['thingsToDoList', page],
    queryFn: () => getPublicThingsToDoList(page),
  });
};

export const useThingToDoBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['thingToDo', slug],
    queryFn: () => getPublicThingToDoBySlug(slug),
    enabled: !!slug,
  });
};

export const useThingsToDo = () => {
  return useQuery({
    queryKey: ['thingsToDoAll'],
    queryFn: () => getPublicThingsToDo(),
  });
};

// --- Gallery ---
export const useGalleryImages = (page: number = 1) => {
  return useQuery({
    queryKey: ['gallery', page],
    queryFn: () => getPublicGalleryList(page),
  });
};

// --- Reviews ---
export const useReviews = (page: number = 1) => {
  return useQuery({
    queryKey: ['reviews', page],
    queryFn: () => getPublicReviewsList(page),
  });
};

// --- Contact, Subscriptions & Bookings (Mutations) ---
export const useContactMessageMutation = () => {
  return useMutation({
    mutationFn: (payload: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => 
      sendContactMessage(payload),
  });
};

export const useNewsletterSubscribeMutation = () => {
  return useMutation({
    mutationFn: (payload: SubscribePayload) => 
      subscribeNewsletter(payload),
  });
};

export const useCreateBookingMutation = () => {
  return useMutation({
    mutationFn: (payload: Omit<CreateBooking, 'id' | 'createdAt'>) => 
      createBooking(payload),
  });
};
