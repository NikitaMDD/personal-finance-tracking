import type {
    HTMLAttributes,
} from "react";

import { cn } from "@/shared/lib/cn";

export function CardContent({
    className,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "px-6 pb-6",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}