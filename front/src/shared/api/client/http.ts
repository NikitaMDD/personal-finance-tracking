const BASE_URL =
    import.meta.env.VITE_API_URL;

import { tokenStorage } from "./token-storage";

export async function api<T>(
    endpoint: string,
    options: RequestInit = {},
): Promise<T> {

    const token =
        tokenStorage.get();

    const isPublicEndpoint = endpoint.startsWith("/auth/");

    const headers = new Headers(
        options.headers,
    );

    if (!(options.body instanceof FormData)) {
        headers.set(
            "Content-Type",
            "application/json",
        );
    }

    if (token && !isPublicEndpoint) {
        headers.set(
            "Authorization",
            `Bearer ${token}`,
        );
    }

    const response =
        await fetch(
            `${BASE_URL}${endpoint}`,
            {
                ...options,
                headers,
            },
        );

    if (!response.ok) {

        if (
            response.status === 401 ||
            response.status === 403
        ) {
            tokenStorage.remove();
            window.location.href = "/auth";
        }

        const message =
            await response.text();

        throw new Error(
            message || "Request failed",
        );

    }

    const contentType =
        response.headers.get(
            "content-type",
        );

    if (
        response.status === 204 ||
        !contentType || 
        !contentType.includes(
            "application/json",
        )
    ) {
        return undefined as T;
    }

    return response.json();

}