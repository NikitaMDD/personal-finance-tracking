import { cva } from "class-variance-authority";

export const stackVariants = cva(
    "flex",
    {
        variants: {
            direction: {
                row: "flex-row",
                column: "flex-col",
            },

            align: {
                start: "items-start",
                center: "items-center",
                end: "items-end",
                stretch: "items-stretch",
            },

            justify: {
                start: "justify-start",
                center: "justify-center",
                end: "justify-end",
                between: "justify-between",
                around: "justify-around",
            },

            gap: {
                xs: "gap-1",
                sm: "gap-2",
                md: "gap-4",
                lg: "gap-6",
                xl: "gap-8",
            },
        },

        defaultVariants: {
            direction: "column",
            gap: "md",
            align: "stretch",
            justify: "start",
        },
    },
);