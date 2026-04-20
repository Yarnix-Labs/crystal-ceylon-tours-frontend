export interface Vehicle {
    id: number;
    name: string;
    type: string;
    model: string;
    passengers: number;
    features: string[];
    description: string;
    images: string[];
    status: string;
    createdAt: string;
    updatedAt: string;
}

export interface VehicleListResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data: Vehicle[];
    timestamp: string;
    path: string;
}
