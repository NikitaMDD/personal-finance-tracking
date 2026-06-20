import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/shared/lib/cn";
import { Typography } from "@/shared/ui/typography";

import { inputVariants } from "./input.styles";
import type { InputProps } from "./input.types";
import { forwardRef } from "react";

export const Input = forwardRef<
    HTMLInputElement, InputProps
>(
    (
        {
            label,
            error,
            fullWidth = false,
            className,
            ...props
        },
        ref,
    ) => {
        return (
            <div
                className={
                    fullWidth
                        ? "w-full"
                        : undefined
                }
            >
                {label && (
                    <Typography
                        variant="small"
                        className="mb-2 block"
                    >
                        {label}
                    </Typography>
                )}

                <input
                    ref={ref}
                    className={cn(
                        inputVariants({
                            error: Boolean(error),
                            fullWidth,
                        }),
                        className,
                    )}
                    {...props}
                />

                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -4,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -4,
                            }}
                        >
                            <Typography
                                variant="caption"
                                className="
                                    mt-2
                                    block
                                    text-[var(--color-danger)]
                                "
                            >
                                {error}
                            </Typography>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        )
    },
);

Input.displayName = "Input"