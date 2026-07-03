import * as DialogPrimitive
    from "@radix-ui/react-dialog";

import {
    AnimatePresence,
    motion,
} from "framer-motion";

import { X } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";

import { cn } from "@/shared/lib/cn";

import { dialogVariants } from "./dialog.styles";

import type { DialogProps } from "./dialog.types";

export function Dialog({
    open,
    onOpenChange,
    title,
    description,
    children,
    size,
}: DialogProps) {

    return (
        <DialogPrimitive.Root
            open={open}
            onOpenChange={onOpenChange}
        >
            <AnimatePresence>
                {open && (
                    <DialogPrimitive.Portal forceMount>
                        <DialogPrimitive.Overlay
                            asChild
                        >
                            <motion.div
                                className="
                                    fixed
                                    inset-0
                                    z-40
                                    bg-black/40
                                    backdrop-blur-sm
                                "
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                            />
                        </DialogPrimitive.Overlay>

                        <DialogPrimitive.Content
                            forceMount
                            asChild
                        >
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: .96,
                                    y: 24,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: .96,
                                    y: 24,
                                }}
                                transition={{
                                    duration: .2,
                                }}
                                className={cn(
                                    dialogVariants({
                                        size,
                                    }),
                                )}
                            >
                                <div className="p-8">
                                    <div
                                        className="
                                            mb-8
                                            flex
                                            items-start
                                            justify-between
                                        "
                                    >
                                        <div>
                                            <Typography
                                                variant="h2"
                                            >
                                                {title}
                                            </Typography>
                                            {description && (
                                                <Typography
                                                    variant="body"
                                                    className="
                                                        mt-2
                                                        text-[var(--color-text-secondary)]
                                                    "
                                                >
                                                    {description}
                                                </Typography>
                                            )}
                                        </div>
                                        <DialogPrimitive.Close
                                            asChild
                                        >
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                            >
                                                <X
                                                    size={18}
                                                />
                                            </Button>
                                        </DialogPrimitive.Close>
                                    </div>
                                    {children}
                                </div>
                            </motion.div>
                        </DialogPrimitive.Content>
                    </DialogPrimitive.Portal>
                )}
            </AnimatePresence>
        </DialogPrimitive.Root>
    );
}