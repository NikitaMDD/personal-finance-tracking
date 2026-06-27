import type {
    PropsWithChildren,
} from "react";

import { AuthProvider } from "./AuthProvider";
import { QueryProvider } from "./QueryProvider";
import { TooltipProvider } from "./TooltipProvider";

export function AppProviders({
    children,
}: PropsWithChildren) {
    return (
        <QueryProvider>
            <AuthProvider>
                <TooltipProvider>
                    {children}
                </TooltipProvider>
            </AuthProvider>
        </QueryProvider>
    );
}