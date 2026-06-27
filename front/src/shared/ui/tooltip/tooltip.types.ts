import type {
    ComponentPropsWithoutRef,
} from "react";

import type * as TooltipPrimitive from "@radix-ui/react-tooltip";

export type TooltipContentProps =
    ComponentPropsWithoutRef<
        typeof TooltipPrimitive.Content
    >;