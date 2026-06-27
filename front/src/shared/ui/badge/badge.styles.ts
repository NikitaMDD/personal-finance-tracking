import { cva } from "class-variance-authority";

export const badgeVariants = cva(
    `
        inline-flex
        items-center
        justify-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        transition-colors
    `,
    {
        variants: {
            variant: {
                primary:
                    "bg-[var(--color-primary)] text-white",

                secondary:
                    "bg-[var(--color-surface-secondary)] text-[var(--color-text)]",

                success:
                    "bg-green-100 text-green-700",

                warning:
                    "bg-yellow-100 text-yellow-700",

                danger:
                    "bg-red-100 text-red-700",

                outline:
                    "border border-[var(--color-border)] bg-transparent",
            },
        },

        defaultVariants: {
            variant: "primary",
        },
    },
);