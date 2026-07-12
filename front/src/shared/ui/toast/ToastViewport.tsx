import * as RadixToast from "@radix-ui/react-toast";

export function ToastViewport() {

    return (
        <RadixToast.Viewport
            className="
                fixed
                top-6
                right-6
                z-50

                flex
                w-[360px]
                max-w-full

                flex-col

                gap-3

                outline-none
            "
        />
    );
}