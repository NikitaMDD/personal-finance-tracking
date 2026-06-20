import { Typography } from "@/shared/ui/typography";

import { inputVariants } from "./input.styles";
import type { InputProps } from "./input.types";

import { cn } from "@/shared/lib/cn";

export function Input({
    label,
    error,
    fullWidth = false,
    className,
    ...props
}: InputProps) {
  return (
    <div 
        className={
            fullWidth
                ? 'w-full'
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
            className={cn(
                inputVariants({
                    error: Boolean(error),
                    fullWidth,
                }),
                className,
            )}
            {...props}
        />

        {error && (
            <Typography
                variant="caption"
                className="mt-2 block text-danger"
            >
                {error}
            </Typography>
        )}

    </div>
  )
}
