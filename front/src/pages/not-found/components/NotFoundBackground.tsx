import type {
    PropsWithChildren,
} from "react";

export function NotFoundBackground({
    children,
}: PropsWithChildren) {

    return (

        <main
            className="
                flex
                min-h-screen
                items-center
                justify-center
                overflow-hidden
                bg-white
                px-8
            "
        >
            <div
                className="
                    w-full
                    max-w-5xl
                "
            >
                {children}
            </div>
        </main>

    );

}