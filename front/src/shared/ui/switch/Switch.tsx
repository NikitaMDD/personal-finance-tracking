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
    description,
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
                <div className="flex-1">
                    {label && (
                        <Typography
                            variant="h3"
                        >
                            {label}
                        </Typography>
                    )}

                    {description && (
                        <Typography
                            className="
                                mt-1
                                text-sm
                                text-[var(--color-text-secondary)]
                            "
                        >
                            {description}
                        </Typography>
                    )}
                </div>

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
                            bg-white
                            shadow
                            transition-transform
                            duration-200

                            data-[state=checked]:translate-x-6
                            data-[state=unchecked]:translate-x-1
                        "
                    />
                </SwitchPrimitive.Root>
            </label>

            {(helperText || error) && (
                <Typography
                    className={cn(
                        "text-sm",
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