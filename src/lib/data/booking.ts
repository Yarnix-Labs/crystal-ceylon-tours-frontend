export interface CreateBooking {
    id?: number;
    tourPackageId: number;
    vehicleId: number;
    price: number;
    name: string;
    country: string;
    phoneNumber: string;
    passengers: number;
    email: string;
    whatsapp: string;
    clientMessage: string;
    createdAt?: string;
    arrivalDate: string;
}

export interface CreateBookingResponse {
    success: boolean;
    message: string;
    data?: CreateBooking;
}

export const createBookings: CreateBooking[] = [];