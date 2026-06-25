import type { PropsWithChildren } from "react";

export function PageContainer({
    children,
}: PropsWithChildren) {
    return (
        <main
            className="
                flex-1
                overflow-y-auto
                p-8
            "
        >
            {children}
        </main>
    );
}