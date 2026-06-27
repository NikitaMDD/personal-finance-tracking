import * as PopoverPrimitive
    from "@radix-ui/react-popover";

import {
    AnimatePresence,
    motion,
} from "framer-motion";

import {
    forwardRef,
} from "react";

import {
    popoverContentStyles,
} from "./popover.styles";

const Popover =
    PopoverPrimitive.Root;

const PopoverTrigger =
    PopoverPrimitive.Trigger;

const PopoverAnchor =
    PopoverPrimitive.Anchor;

const PopoverPortal =
    PopoverPrimitive.Portal;

const PopoverContent =
    forwardRef<
        HTMLDivElement,
        PopoverPrimitive.PopoverContentProps
    >(
        (
            {
                className,
                sideOffset = 8,
                children,
                ...props
            },
            ref,
        ) => (
            <PopoverPortal>
                <AnimatePresence>
                    <PopoverPrimitive.Content
                        ref={ref}
                        sideOffset={sideOffset}
                        className={popoverContentStyles(
                            className,
                        )}
                        asChild
                        {...props}
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
                            exit={{
                                opacity: 0,
                                scale: .96,
                                y: -6,
                            }}
                            transition={{
                                duration: .18,
                            }}
                        >
                            {children}
                        </motion.div>
                    </PopoverPrimitive.Content>
                </AnimatePresence>
            </PopoverPortal>
        ),
    );

PopoverContent.displayName =
    "PopoverContent";

export {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverAnchor,
};