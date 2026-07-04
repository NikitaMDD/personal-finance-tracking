import { cva } from "class-variance-authority";

export const selectVariants = cva(
    `
        flex
        h-12
        w-full
        items-center
        justify-between
        rounded-2xl
        border
        border-[var(--color-border)]
        bg-[var(--color-input)]
        px-4
        text-sm
        transition-colors
        hover:border-[var(--color-primary)]
        focus:outline-none
    `,
);