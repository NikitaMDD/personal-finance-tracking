import { createBrowserRouter } from "react-router-dom";
import { LoginAndRegisterPage } from "@/pages/auth";
import AuthLayout from "../layouts/AuthLayout";

export const router = createBrowserRouter([
    {
        element: <AuthLayout/>,
        children: [
            {
                path: "/auth",
                element: <LoginAndRegisterPage/>
            },
        ]
    }
]);