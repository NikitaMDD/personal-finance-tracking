import { cn } from "@/shared/lib/cn";

import type {
    ButtonSize,
    ButtonVariant,
} from "./button.types";

interface ButtonVariantsProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    className?: string;
}

const variants: Record<ButtonVariant, string> = {
    primary:
    "bg-[var(--color-primary)] text-[var(--color-text)] hover:opacity-90 active:scale-[0.98]",

    secondary:
    "border border-[var(--color-border)] bg-[var(--color-button-secondary)] text-[var(--color-text)] hover:bg-[var(--color-button-secondary-hover)]",

    ghost:
    "bg-transparent hover:bg-[var(--color-surface-secondary)]",

    danger:
    "bg-[var(--color-danger)] text-white hover:opacity-90 active:scale-[0.98]",
};

const sizes: Record<ButtonSize, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-sm",
    lg: "h-12 px-6 text-base",
};

export function buttonVariants({
    variant,
    size,
    fullWidth = false,
    className,
}: ButtonVariantsProps) {
    return cn(
        "inline-flex items-center justify-center rounded-[var(--radius-md)] font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
    );
}