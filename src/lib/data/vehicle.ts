export interface Vehicle {
  id: number | string;
  name?: string;
  type: string;
  passengers: number | string;
  price?: number;
  images?: string[];
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}
