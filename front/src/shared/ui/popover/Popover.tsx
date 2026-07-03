import * as PopoverPrimitive from "@radix-ui/react-popover";

import { motion } from "framer-motion";

import { popoverContentStyles } from "./popover.styles";

interface PopoverProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "center" | "start" | "end";
    sideOffset?: number;
}

export function Popover({
    trigger,
    children,
    side = "bottom",
    align = "end",
    sideOffset = 8,
}: PopoverProps) {

    return (
        <PopoverPrimitive.Root>
            <PopoverPrimitive.Trigger
                asChild
            >
                {trigger}
            </PopoverPrimitive.Trigger>

            <PopoverPrimitive.Portal>
                <PopoverPrimitive.Content
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    className={popoverContentStyles()}
                    asChild
                >

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: .96,
                            y: -6,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: .18,
                            ease: "easeOut",
                        }}
                    >
                        {children}
                    </motion.div>

                </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
    );
}