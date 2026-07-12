export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    password: string;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken?: string;
}