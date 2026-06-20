import type {
    HTMLAttributes,
} from "react";

import { cn } from "@/shared/lib/cn";

export function CardHeader({
    className,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div 
            className={cn(
                "p-6",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}