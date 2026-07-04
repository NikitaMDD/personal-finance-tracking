import type {
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

import type {
    VariantProps,
} from "class-variance-authority";

import {
    buttonVariants,
} from "./button.styles";

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    loading?: boolean;
    startContent?: ReactNode;
    endContent?: ReactNode;
}