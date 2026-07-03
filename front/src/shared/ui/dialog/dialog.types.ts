import type { ReactNode } from "react";

import type {
    VariantProps,
} from "class-variance-authority";

import {
    dialogVariants,
} from "./dialog.styles";

export interface DialogProps
    extends VariantProps<typeof dialogVariants> {

    open: boolean;

    onOpenChange(
        open: boolean,
    ): void;

    title: string;

    description?: string;

    children: ReactNode;

}