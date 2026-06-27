import { cva } from "class-variance-authority";

export const emptyVariants = cva(
    `
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-10
        text-center
    `,
);