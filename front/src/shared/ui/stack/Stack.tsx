import { cn } from "@/shared/lib/cn";

import {
    stackVariants,
} from "./stack.styles";

import type {
    StackProps,
} from "./stack.types";

export function Stack({
    direction,
    gap,
    align,
    justify,
    className,
    children,
    ...props
}: StackProps) {
    return (
        <div
            className={cn(
                stackVariants({
                    direction,
                    gap,
                    align,
                    justify,
                }),
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}