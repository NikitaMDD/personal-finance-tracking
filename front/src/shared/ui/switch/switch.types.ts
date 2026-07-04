import type {
    ComponentPropsWithoutRef,
    ReactNode,
} from "react";

import type * as SwitchPrimitive
    from "@radix-ui/react-switch";

export interface SwitchProps
    extends ComponentPropsWithoutRef<
        typeof SwitchPrimitive.Root
    > {
    label?: ReactNode;
    description?: ReactNode;
    helperText?: ReactNode;
    error?: string;
}