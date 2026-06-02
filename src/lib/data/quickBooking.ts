export interface QuickBookingPayload {
  transferType: string;
  pickupLocation: string;
  dropLocation: string;
  vehicleId: number;
  passengersCount: number;
  date: string;
  pickupTime: string;
  name: string;
  email?: string;
  mobileNo?: string;
  message?: string;
}

export interface QuickBookingResponse {
  success?: boolean;
  message?: string;
  data?: any;
}
