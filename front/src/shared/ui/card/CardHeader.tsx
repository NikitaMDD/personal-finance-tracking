import type { PropsWithChildren } from "react";

export function CardHeader({
    children,
}: PropsWithChildren) {
    return (
        <div className="p-6">
            {children}
        </div>
    )
}