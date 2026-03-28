export interface ContactMessage {
  id?: number;
  name: string;
  Phoneno: string;
  subject: string;
  email: string;
  message: string;
  createdAt?: string;
  status?: "PENDING" | "RESPONDED" | "ARCHIVED";
}

export interface ContactMessageResponse {
    success: boolean;
    message: string;
    data?: ContactMessage;
}

export const contactMessages: ContactMessage[] = [];

// Newsletter / email subscription (home page)
export interface SubscribePayload {
  email: string;
}

export interface SubscribeResponse {
  success: boolean;
  message?: string;
  data?: { email?: string };
}