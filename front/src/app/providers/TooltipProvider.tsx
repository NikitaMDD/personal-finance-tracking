import type {
    PropsWithChildren,
} from "react";

import {
    TooltipProvider as RadixTooltipProvider,
} from "@radix-ui/react-tooltip";

export function TooltipProvider({
    children,
}: PropsWithChildren) {
    return (
        <RadixTooltipProvider
            delayDuration={0}
        >
            {children}
        </RadixTooltipProvider>
    );
}