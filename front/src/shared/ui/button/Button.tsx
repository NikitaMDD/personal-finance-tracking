import { motion } from "framer-motion";

import { buttonVariants } from "./button.styles";
import type { ButtonProps } from "./button.types";
import { Spinner } from "@/shared/ui/spinner"

export function Button({
    children,
    variant = "primary",
    size = "md",
    loading = false,
    fullWidth = false,
    disabled,
    className,
    ...props
}: ButtonProps) {
    return (
        <motion.button
            whileTap={{
                scale: 0.98,
            }}
            disabled={disabled || loading}
            className={buttonVariants({
                variant,
                size,
                fullWidth,
                className
            })}
            {...props}
        >
            {
                loading
                    ? <Spinner/>
                    : children
            }
        </motion.button>
    );
}