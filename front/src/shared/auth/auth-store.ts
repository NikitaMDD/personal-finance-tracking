import { createContext } from "react";

interface AuthStore {
    isAuthenticated: boolean;

    login: (
        accessToken: string,
        refreshToken: string,
    ) => void;

    logout: () => void;
}

export const AuthContext =
    createContext<AuthStore | null>(
        null,
    );