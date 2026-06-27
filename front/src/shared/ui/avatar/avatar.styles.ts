import { cva } from "class-variance-authority";

export const avatarVariants = cva(
    `
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-[var(--color-surface-secondary)]
        text-[var(--color-text)]
        font-medium
        select-none
        shrink-0
    `,
    {
        variants: {
            size: {
                sm: "h-8 w-8 text-xs",
                md: "h-10 w-10 text-sm",
                lg: "h-12 w-12 text-base",
                xl: "h-16 w-16 text-lg",
            },
        },

        defaultVariants: {
            size: "md",
        },
    },
);