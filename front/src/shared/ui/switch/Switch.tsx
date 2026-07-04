import * as SwitchPrimitive
    from "@radix-ui/react-switch";

import { Typography }
    from "@/shared/ui/typography";

import { cn }
    from "@/shared/lib/cn";

import {
    switchVariants,
} from "./switch.styles";

import type {
    SwitchProps,
} from "./switch.types";

export function Switch({
    label,
    helperText,
    error,
    className,
    ...props
}: SwitchProps) {

    return (

        <div className="space-y-2">
            <label
                className="
                    flex
                    items-center
                    justify-between
                    gap-4
                "
            >
                {label && (
                    <Typography
                        variant="body"
                    >
                        {label}
                    </Typography>
                )}

                <SwitchPrimitive.Root
                    className={cn(
                        switchVariants(),
                        className,
                    )}
                    {...props}
                >
                    <SwitchPrimitive.Thumb
                        className="
                            block
                            h-5
                            w-5
                            rounded-full
                            bg-[var(--color-surface)]
                            shadow
                            transition-transform

                            data-[state=checked]:translate-x-6
                            data-[state=unchecked]:translate-x-1
                        "
                    />
                </SwitchPrimitive.Root>
            </label>

            {(helperText || error) && (
                <Typography
                    variant="caption"
                    className={cn(

                        error
                            ? "text-[var(--color-danger)]"
                            : "text-[var(--color-text-secondary)]",

                    )}
                >
                    {error ?? helperText}
                </Typography>
            )}
        </div>
    );
}