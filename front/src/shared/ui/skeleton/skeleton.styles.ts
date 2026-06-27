import { cva } from "class-variance-authority";

export const skeletonVariants = cva(
    `
        animate-pulse
        rounded-xl
        bg-[var(--color-surface-secondary)]
    `,
);