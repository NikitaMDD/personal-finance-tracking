import type {
    HTMLAttributes,
} from "react";
import { cn } from "@/shared/lib/cn"

export function CardFooter({
    className,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "border-t border-[var(--color-border)] p-6",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}