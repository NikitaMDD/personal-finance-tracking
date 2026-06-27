import type {
    HTMLAttributes,
} from "react";

import type {
    VariantProps,
} from "class-variance-authority";

import {
    stackVariants,
} from "./stack.styles";

export interface StackProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof stackVariants> {}