import { api } from "@/shared/api/client";

import type {
    LoginRequest,
    RegisterRequest,
    AuthResponse,
} from "../model/auth.types";

export const authApi = {
    login(data: LoginRequest) {
        return api<AuthResponse>(
            "/auth/login",
            {
                method: "POST",

                body: JSON.stringify(
                    data,
                ),
            },
        );
    },

    register(data: RegisterRequest) {
        return api<AuthResponse>(
            "/auth/register",
            {
                method: "POST",

                body: JSON.stringify(
                    data,
                ),
            },
        );
    },
};