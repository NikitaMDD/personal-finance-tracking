import type { ButtonProps } from "./button.types";

import { buttonVariants } from "./button.styles";
import { Spinner } from "../spinner";

export function Button({
    children,
    variant = "primary",
    size = "md",
    loading = false,
    fullWidth = false,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            disabled={disabled || loading}
            className={buttonVariants({
                variant,
                size,
                fullWidth: loading ? true : false,
            })}
            {...props}
        >
            {loading ? <Spinner/> : children}
        </button>
    );
}