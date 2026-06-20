import { cn } from "@/shared/lib/cn";
import type { CardProps } from "./card.types";

export function Card({
    className,
    children,
    ...props
}: CardProps) {
    return (
        <div
            className={
                cn(
                    `
                        rounded-[var(--radius-lg)]
                        border
                        border-[var(--color-border)]
                        bg-[var(--color-surface)]
                        shadow-sm
                    `,
                    className,
                )
            }
            {...props}
        >
            {children}
        </div>
    );
}