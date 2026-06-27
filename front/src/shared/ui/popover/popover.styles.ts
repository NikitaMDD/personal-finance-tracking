import { cn } from "@/shared/lib/cn";

export function popoverContentStyles(
    className?: string,
) {
    return cn(
        "z-50",
        "rounded-2xl",
        "border",
        "border-[var(--color-border)]",
        "bg-white",
        "shadow-xl",
        "p-2",
        "outline-none",
        className,
    );
}