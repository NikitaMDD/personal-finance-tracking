import type {
    VariantProps,
} from "class-variance-authority";

import {
    selectVariants,
} from "./select.styles";

export interface SelectOption {

    value: string;

    label: string;

}

export interface SelectProps
    extends VariantProps<typeof selectVariants> {

    value?: string;

    placeholder?: string;

    label?: string;

    disabled?: boolean;

    options: SelectOption[];

    onValueChange(
        value: string,
    ): void;

}