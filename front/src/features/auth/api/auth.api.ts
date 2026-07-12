import { api } from "@/shared/api/client/http";

import type {
    AuthResponse,
    LoginRequest,
    RegisterRequest,
} from "../model/auth.types";

export const authApi = {

    login(
        data: LoginRequest,
    ) {
        return api<AuthResponse>(
            "/auth/login",
            {
                method: "POST",
                body: JSON.stringify(data),
            },
        );
    },

    register(
        data: RegisterRequest,
    ) {
        return api<AuthResponse>(
            "/auth/register",
            {
                method: "POST",
                body: JSON.stringify(data),
            },
        );
    },

};