import { cn } from "@/shared/lib/cn";

export function tooltipContentStyles(
    className?: string,
) {
    return cn(
        `
            z-50
            max-w-xs

            rounded-xl

            bg-[var(--color-surface)]

            px-3
            py-2

            text-xs
            text-[var(--color-text)]

            shadow-lg

            origin-[var(--radix-tooltip-content-transform-origin)]

            data-[state=delayed-open]:animate-in
            data-[state=closed]:animate-out

            data-[state=delayed-open]:fade-in
            data-[state=closed]:fade-out

            data-[state=delayed-open]:zoom-in-95
            data-[state=closed]:zoom-out-95
        `,
        className,
    );
}