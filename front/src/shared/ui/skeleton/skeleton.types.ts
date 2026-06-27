import type {
    HTMLAttributes,
} from "react";

import type {
    VariantProps,
} from "class-variance-authority";

import {
    skeletonVariants,
} from "./skeleton.styles";

export interface SkeletonProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof skeletonVariants> {}