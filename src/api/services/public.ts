/**
 * Public (read-only) API layer for the marketing site.
 * All functions call the real API endpoints.
 * No auth required for these endpoints.
 */
import axiosInstance from "@/api";
import { ENDPOINTS } from "@/api/endpoints";
import type { TourPackage } from "@/lib/data/tourPackages";
import type { Destination } from "@/lib/data/destinations";
import type { BlogPost } from "@/lib/data/blogPosts";
import type { ThingToDo } from "@/lib/data/thingsToDo";
import type { ContactMessage, ContactMessageResponse, SubscribePayload, SubscribeResponse } from "@/lib/data/contactus";
import type { CreateBooking, CreateBookingResponse } from "@/lib/data/booking";

/** Public (approved) review for testimonials */
export interface PublicReview {
    id: number | string;
    name?: string;
    customerName?: string;
    rating: number;
    title?: string;
    comment: string;
    tourName?: string;
    createdAt?: string;
    image?: string;
    customerImage?: string;
}

export interface ReviewListResponse {
    items: PublicReview[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}



// --- Destinations ---

interface DestinationListResponse {
    items: Destination[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}


interface ThingsToDoListResponse {
    items: ThingToDo[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}

export interface BlogListResponse {
    items: BlogPost[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}


export interface TourPackageListResponse {
    items: TourPackage[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}

/** Gallery image returned from the public gallery endpoint */
export interface GalleryImage {
    id: number;
    title: string;
    imageUrl: string;
    isActive: boolean;
}

export interface GalleryListResponse {
    items: GalleryImage[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}


// tourlist
export async function getPublicTourPacakgesList(page: number = 1): Promise<TourPackageListResponse> {
    const { data } = await axiosInstance.get(ENDPOINTS.tourPackagesList(page));
    return data.data;

}

// ✅ Get single tour by ID (published)
export async function getPublicTourPackageBySlug(slug: string): Promise<TourPackage> {
    try {
        const { data } = await axiosInstance.get(
            ENDPOINTS.tourPackageBySlugClient(slug)
        );

        console.log("📡 API Response for tour package slug", slug, ":", data);

        // Return the nested tour package object
        return data.data;
    } catch (error) {
        console.error("❌ Error fetching tour package by slug:", error);
        throw error;
    }
}



export async function getPublicDestinationsList(page: number = 1): Promise<DestinationListResponse> {
    const { data } = await axiosInstance.get(ENDPOINTS.destinationsList(page));
    return data.data;

}




// --- Gallery ---

export async function getPublicGalleryList(page: number = 1): Promise<GalleryListResponse> {
    const { data } = await axiosInstance.get(ENDPOINTS.galleryList(page));
    return data.data;
}


// --- Reviews (public list for testimonials) ---

export async function getPublicReviewsList(page: number = 1): Promise<ReviewListResponse> {
    const { data } = await axiosInstance.get(ENDPOINTS.reviewsList(page));
    const raw = data.data ?? data;
    if (raw?.items) {
        raw.items = raw.items.map((r: PublicReview) => ({
            ...r,
            name: r.name ?? r.customerName ?? "",
            image: r.image ?? r.customerImage ?? "",
        }));
    }
    return raw;
}

// ✅ Get single destination by ID (published)
export async function getPublicDestinationBySlug(slug: string): Promise<Destination> {
    try {
        const { data } = await axiosInstance.get(
            ENDPOINTS.destinationBySlugClient(slug)
        );

        console.log("📡 API Response for destination slug", slug, ":", data);

        // Return the nested destination object
        return data.data;
    } catch (error) {
        console.error("❌ Error fetching destination by slug:", error);
        throw error;
    }
}


// --- Things to do ---

export async function getPublicThingsToDoList(page: number = 1): Promise<ThingsToDoListResponse> {
    const { data } = await axiosInstance.get(ENDPOINTS.thingsToDoList(page));
    return data.data;

}

export async function getPublicThingToDoBySlug(slug: string): Promise<ThingToDo> {
    try {
        const { data } = await axiosInstance.get(
            ENDPOINTS.thingToDoBySlugClient(slug)
        );

        console.log("📡 API Response for thing to do slug", slug, ":", data);

        // Return the nested thing to do object
        return data.data;
    } catch (error) {
        console.error("❌ Error fetching thing to do by slug:", error);
        throw error;
    }
}


export async function getPublicThingsToDo(): Promise<ThingToDo[]> {
    const { data } = await axiosInstance.get<ThingToDo[]>(ENDPOINTS.thingsToDo);
    return data;
}





// --- Blogs ---

export async function getPublicBlogsList(page: number = 1): Promise<BlogListResponse> {
    const { data } = await axiosInstance.get(ENDPOINTS.blogList(page));
    return data.data;

}


export async function getPublicBlogPostBySlug(slug: string): Promise<BlogPost> {
    try {
        const { data } = await axiosInstance.get(
            ENDPOINTS.blogBySlugClient(slug)
        );

        console.log("📡 API Response for blog slug", slug, ":", data);

        // Return the nested blog object
        return data.data;
    } catch (error) {
        console.error("❌ Error fetching blog by slug:", error);
        throw error;
    }
}

export async function getPublicBlogs(): Promise<BlogPost[]> {
    const { data } = await axiosInstance.get<BlogPost[]>(ENDPOINTS.blogs);
    return data;
}



export async function sendContactMessage(
    payload: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>
): Promise<ContactMessageResponse> {
    try {
        console.log("📤 Sending contact message to:", ENDPOINTS.contactMessage);
        console.log("📤 Payload:", JSON.stringify(payload, null, 2));

        const { data } = await axiosInstance.post<ContactMessageResponse>(
            ENDPOINTS.contactMessage,
            payload
        );

        console.log("📧 Contact message sent successfully:", data);
        return data;
    } catch (error: any) {
        console.error("❌ Error sending contact message:", error);
        console.error("❌ Error response:", error?.response?.data);
        console.error("❌ Error status:", error?.response?.status);

        // Log validation field errors if present
        if (error?.response?.data?.error?.fields) {
            console.error("❌ Validation field errors:", JSON.stringify(error.response.data.error.fields, null, 2));
        }

        throw error;
    }
}

export async function subscribeNewsletter(payload: SubscribePayload): Promise<SubscribeResponse> {
    try {
        console.log("📤 Subscribing to newsletter:", ENDPOINTS.contactSubscribe);
        console.log("📤 Payload:", JSON.stringify(payload, null, 2));

        const { data } = await axiosInstance.post<SubscribeResponse>(
            ENDPOINTS.contactSubscribe,
            payload
        );

        console.log("📧 Newsletter subscription successful:", data);
        return data;
    } catch (error: any) {
        console.error("❌ Error subscribing to newsletter:", error);
        console.error("❌ Error response:", error?.response?.data);
        console.error("❌ Error status:", error?.response?.status);

        if (error?.response?.data?.error?.fields) {
            console.error("❌ Validation field errors:", JSON.stringify(error.response.data.error.fields, null, 2));
        }

        throw error;
    }
}

export async function createBooking(
    payload: Omit<CreateBooking, 'id' | 'createdAt'>
): Promise<CreateBookingResponse> {
    try {
        console.log("📤 Creating booking to:", ENDPOINTS.createBooking);
        console.log("📤 Payload:", JSON.stringify(payload, null, 2));

        const { data } = await axiosInstance.post<CreateBookingResponse>(
            ENDPOINTS.createBooking,
            payload
        );

        console.log("📧 Booking created successfully:", data);
        return data;
    } catch (error: any) {
        console.error("❌ Error creating booking:", error);
        console.error("❌ Error response:", error?.response?.data);
        console.error("❌ Error status:", error?.response?.status);

        // Log validation field errors if present
        if (error?.response?.data?.error?.fields) {
            console.error("❌ Validation field errors:", JSON.stringify(error.response.data.error.fields, null, 2));
        }

        throw error;
    }
}
