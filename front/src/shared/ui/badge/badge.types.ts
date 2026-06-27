import type {
    VariantProps,
} from "class-variance-authority";

import type {
    HTMLAttributes,
} from "react";

import {
    badgeVariants,
} from "./badge.styles";

export interface BadgeProps
    extends HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof badgeVariants> {}