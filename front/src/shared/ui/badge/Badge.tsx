import { cn } from "@/shared/lib/cn";

import { badgeVariants } from "./badge.styles";
import type { BadgeProps } from "./badge.types";

export function Badge({
    variant,
    className,
    children,
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn(
                badgeVariants({
                    variant,
                }),
                className,
            )}
            {...props}
        >
            {children}
        </span>
    );
}