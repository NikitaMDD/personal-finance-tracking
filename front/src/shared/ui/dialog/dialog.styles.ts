import { cva } from "class-variance-authority";

export const dialogVariants = cva(
    `
        fixed
        left-1/2
        top-1/2
        z-50

        w-full
        -translate-x-1/2
        -translate-y-1/2

        rounded-3xl
        bg-white

        shadow-2xl

        outline-none
    `,
    {
        variants: {
            size: {
                sm: "max-w-md",
                md: "max-w-xl",
                lg: "max-w-3xl",
                xl: "max-w-5xl",
            },
        },
        defaultVariants: {
            size: "md",
        },
    },
);