import type {User} from "@/entities/user/model"

export interface AuthContextValue {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login(
        accessToken: string,
        refreshToken: string,
    ): Promise<void>;
    logout(): void;
    registerEmail: string;
    setRegisterEmail(
        email: string,
    ): void;
}