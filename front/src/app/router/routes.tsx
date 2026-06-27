import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import { LoginAndRegisterPage } from "@/pages/auth";
import { DashboardPage } from "@/pages/dashboard";
import { GuidelinePage } from "@/shared/ui/guideline";
import { TransactionsPage } from "@/pages/transactions";


import { ROUTES } from "@/shared/constants/routes";
import { ProtectedRoute } from "@/features/auth";
import { GuestRoute } from "@/features/auth/";

export const router = createBrowserRouter([
    {
        element: <GuestRoute />,
        children: [
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: ROUTES.AUTH,
                        element: <LoginAndRegisterPage />,
                    },
                ],
            },
        ],
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <DashboardLayout />,
                children: [
                    {
                        path: ROUTES.DASHBOARD,
                        element: <DashboardPage />,
                    },

                    {
                        path: ROUTES.TRANSACTIONS,
                        element: <TransactionsPage />,
                    },

                    // {
                    //     path: ROUTES.ANALYTICS,
                    //     element: <AnalyticsPage />,
                    // },
                ],
            },
        ],
    },
    {
        path: ROUTES.GUIDELINE,
        element: <GuidelinePage />,
    },
]);