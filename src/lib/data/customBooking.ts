/** Payload sent to POST /custom-bookings/create */
export interface CreateCustomBookingPayload {
  fullName: string;
  startDate: string; // ISO date string, e.g. "2026-06-20"
  country: string;
  vehicleId: number;
  numberOfDays: number;
  travelers: number;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
  specialRequests?: string;
}

/** Standard API response envelope for custom booking creation */
export interface CreateCustomBookingResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: null;
  timestamp: string;
  path: string;
}
