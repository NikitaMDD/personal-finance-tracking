import {
    useCallback,
    useMemo,
    useState,
    type PropsWithChildren,
} from "react";

import { AuthContext } from "@/shared/auth/auth-store";
import { tokenStorage } from "@/shared/auth/token-storage";

export function AuthProvider({
    children,
}: PropsWithChildren) {
    const [isAuthenticated, setIsAuthenticated] =
        useState(
            Boolean(
                tokenStorage.getAccessToken(),
            ),
        );

    const login = useCallback(
        (
            accessToken: string,
            refreshToken: string,
        ) => {
            tokenStorage.setAccessToken(
                accessToken,
            );

            tokenStorage.setRefreshToken(
                refreshToken,
            );

            setIsAuthenticated(true);
        },
        [],
    );

    const logout = useCallback(() => {
        tokenStorage.clear();

        setIsAuthenticated(false);
    }, []);

    const value = useMemo(
        () => ({
            isAuthenticated,
            login,
            logout,
        }),
        [isAuthenticated, login, logout],
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}