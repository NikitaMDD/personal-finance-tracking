import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";

import { LoginAndRegisterPage } from "@/pages/auth";
import { GuidelinePage } from "@/shared/ui/guideline";

import { ROUTES } from "@/shared/constants/routes";

export const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: ROUTES.AUTH,
                element: <LoginAndRegisterPage />,
            },
        ],
    },
    {
        path: ROUTES.GUIDELINE,
        element: <GuidelinePage />,
    },
]);