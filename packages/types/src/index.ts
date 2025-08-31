export namespace User {
  export interface Entity {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface CreateRequest {
    email: string;
    name: string;
    password: string;
  }

  export interface UpdateRequest {
    name?: string;
    email?: string;
  }

  export interface LoginRequest {
    email: string;
    password: string;
  }
}

export namespace Property {
  export interface Entity {
    id: string;
    title: string;
    description: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number; // in square meters
    type: Type;
    status: Status;
    ownerId: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export enum Type {
    APARTMENT = "apartment",
    HOUSE = "house",
    STUDIO = "studio",
    ROOM = "room",
  }

  export enum Status {
    AVAILABLE = "available",
    RENTED = "rented",
    MAINTENANCE = "maintenance",
  }

  export interface CreateRequest {
    title: string;
    description: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    type: Type;
  }

  export interface UpdateRequest {
    title?: string;
    description?: string;
    address?: string;
    price?: number;
    bedrooms?: number;
    bathrooms?: number;
    area?: number;
    type?: Type;
    status?: Status;
  }

  export interface SearchRequest {
    query?: string;
    type?: Type;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
    page?: number;
    limit?: number;
  }
}

export namespace Review {
  export interface Entity {
    id: string;
    propertyId: string;
    userId: string;
    rating: number; // 1-5
    title: string;
    content: string;
    pros: string[];
    cons: string[];
    createdAt: Date;
    updatedAt: Date;
  }

  export interface CreateRequest {
    propertyId: string;
    rating: number;
    title: string;
    content: string;
    pros: string[];
    cons: string[];
  }

  export interface UpdateRequest {
    rating?: number;
    title?: string;
    content?: string;
    pros?: string[];
    cons?: string[];
  }

  export interface SearchRequest {
    propertyId?: string;
    userId?: string;
    minRating?: number;
    maxRating?: number;
    page?: number;
    limit?: number;
  }
}

export namespace API {
  export interface Response<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
  }

  export interface PaginatedResponse<T> extends Response<T[]> {
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  }

  export interface ErrorResponse extends Response<never> {
    success: false;
    error: string;
    code?: string;
    details?: Record<string, any>;
  }

  export interface SuccessResponse<T> extends Response<T> {
    success: true;
    data: T;
    message?: string;
  }
}
