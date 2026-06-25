import { Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "@/shared/constants/routes";
import { useAuth } from "@/shared/auth";

export function ProtectedRoute() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return (
            <Navigate
                to={ROUTES.AUTH}
                replace
            />
        );
    }

    return <Outlet />;
}