import { cn } from "@/shared/lib/cn";

import {
    skeletonVariants,
} from "./skeleton.styles";

import type {
    SkeletonProps,
} from "./skeleton.types";

export function Skeleton({
    className,
    ...props
}: SkeletonProps) {

    return (
        <div
            className={cn(
                skeletonVariants(),
                className,
            )}
            {...props}
        />
    );
}