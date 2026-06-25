import { Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "@/shared/constants/routes";
import { useAuth } from "@/shared/auth";

export function GuestRoute() {
    const {
        isAuthenticated,
    } = useAuth();

    if (isAuthenticated) {
        return (
            <Navigate
                replace
                to={ROUTES.DASHBOARD}
            />
        );
    }

    return <Outlet />;
}