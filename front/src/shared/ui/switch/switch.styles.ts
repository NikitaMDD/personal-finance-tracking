import { cva } from "class-variance-authority";

export const switchVariants = cva(
    `
        relative
        inline-flex
        h-7
        w-12
        shrink-0
        cursor-pointer
        items-center
        rounded-full
        transition-all
        duration-200

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--color-primary)]

        data-[state=checked]:bg-[var(--color-primary)]
        data-[state=unchecked]:bg-[var(--color-border)]

        disabled:cursor-not-allowed
        disabled:opacity-50
    `,
);