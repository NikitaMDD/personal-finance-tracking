import type { PropsWithChildren } from "react";

export function CardContent({
    children,
}: PropsWithChildren) {
    return (
        <div className="px-6 pb-6">
            {children}
        </div>
    );
}