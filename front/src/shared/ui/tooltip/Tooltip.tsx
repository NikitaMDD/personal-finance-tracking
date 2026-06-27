import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { tooltipContentStyles } from "./tooltip.styles";

interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "center" | "start" | "end";
    sideOffset?: number;
}

export function Tooltip({
    children,
    content,
    side = "top",
    align = "center",
    sideOffset = 6,
}: TooltipProps) {

    return (
        <TooltipPrimitive.Root>
            <TooltipPrimitive.Trigger
                asChild
            >
                {children}
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Portal>
                <TooltipPrimitive.Content
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    className={tooltipContentStyles()}
                >
                    {content}
                    <TooltipPrimitive.Arrow />
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
    );
}