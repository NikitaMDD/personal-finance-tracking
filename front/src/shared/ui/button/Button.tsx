import { motion } from "framer-motion";

import { Spinner } from "@/shared/ui/spinner";

import { buttonVariants } from "./button.styles";
import type { ButtonProps } from "./button.types";

export function Button({
    children,
    variant = "primary",
    size = "md",
    loading = false,
    fullWidth = false,
    disabled,
    className,
    startContent,
    endContent,
    ...props
}: ButtonProps) {

    return (

        <motion.button
            whileTap={{
                scale: .98,
            }}
            disabled={
                disabled ||
                loading
            }
            className={buttonVariants({
                variant,
                size,
                fullWidth,
                className,
            })}
            {...props}
        >
            {loading ? (
                <Spinner />
            ) : (
                <>
                    {startContent && (

                        <span
                            className="
                                flex
                                items-center
                            "
                        >
                            {startContent}
                        </span>
                    )}

                    <span>
                        {children}
                    </span>

                    {endContent && (
                        <span
                            className="
                                flex
                                items-center
                            "
                        >
                            {endContent}
                        </span>
                    )}
                </>
            )}
        </motion.button>
    );
}