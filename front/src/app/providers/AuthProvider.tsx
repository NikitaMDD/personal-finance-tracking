import {
    useCallback,
    useMemo,
    type PropsWithChildren,
} from "react";

import {
    queryClient,
} from "@/shared/api/queryClient";

import {
    tokenStorage,
} from "@/shared/auth/token-storage";

import {
    userApi,
} from "@/entities/user/api/user.api";

import {
    useCurrentUser,
} from "@/features/auth/hooks/useCurrentUser";

import {
    AuthContext,
} from "@/shared/auth/auth-store";

import {useState} from "react"

export function AuthProvider({
    children,
}: PropsWithChildren) {

    const currentUser =
        useCurrentUser();

    const [registerEmail, setRegisterEmail] = useState("");

    const login =
        useCallback(
            async (
                accessToken: string,
                refreshToken: string,
            ) => {
                tokenStorage.setAccessToken(
                    accessToken,
                );
                tokenStorage.setRefreshToken(
                    refreshToken,
                );
                await queryClient.fetchQuery({
                    queryKey: [
                        "current-user",
                    ],
                    queryFn:
                        userApi.me,
                });
            },
            [],
        );

    const logout = useCallback(() => {
        tokenStorage.clear();
        queryClient.clear();
    }, []);

    const value = useMemo(() => ({
        user: currentUser.data ?? null,
        isAuthenticated:
            !!currentUser.data,
        isLoading:
            currentUser.isLoading,
        login,
        logout,
        registerEmail,
        setRegisterEmail,
    }), [
        currentUser.data,
        currentUser.isLoading,
        login,
        logout,
        registerEmail,
    ]);

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    );
}