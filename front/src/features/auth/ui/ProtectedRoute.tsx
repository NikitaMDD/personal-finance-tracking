import {
    Navigate,
    Outlet,
} from "react-router-dom";

import { useAuth } from "@/shared/auth";
import { ROUTES } from "@/shared/constants/routes";

export function ProtectedRoute() {

    const {
        isAuthenticated,
        isLoading,
    } = useAuth();

    if (isLoading) {
        return <>Loading...</>;
    }

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