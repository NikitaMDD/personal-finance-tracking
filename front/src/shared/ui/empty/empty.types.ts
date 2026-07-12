import type {
    ReactNode,
    HTMLAttributes,
} from "react";

import type {
    VariantProps,
} from "class-variance-authority";

import {
    emptyVariants,
} from "./empty.styles";

export interface EmptyProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyVariants> {
        icon?: ReactNode;
        title: string;
        description?: string;
        action?: ReactNode;
        onAction?(): void;
    }