import type {
    PropsWithChildren,
} from "react";

import { AuthProvider } from "./AuthProvider";
import { QueryProvider } from "./QueryProvider";
import { TooltipProvider } from "./TooltipProvider";
import {ToastProvider} from "@/shared/ui/toast";

export function AppProviders({
    children,
}: PropsWithChildren) {
    return (
        <QueryProvider>
            <AuthProvider>
                <ToastProvider>
                    <TooltipProvider>
                        {children}
                    </TooltipProvider>
                </ToastProvider>
            </AuthProvider>
        </QueryProvider>
    );
}