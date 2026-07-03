import { cn } from "@/shared/lib/cn";

export const progressRingStyles = (
    className?: string,
) =>
    cn(
        `
            relative
            inline-flex
            items-center
            justify-center
        `,
        className,
    );