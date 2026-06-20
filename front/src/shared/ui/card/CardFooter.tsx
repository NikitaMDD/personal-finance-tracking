import type { PropsWithChildren } from "react";

export function CardFooter({
    children,
}: PropsWithChildren) {
    return (
        <div
            className="
                border-t
                border-[var(--color-border)]
                p-6
            "
        >
            {children}
        </div>
    );
}