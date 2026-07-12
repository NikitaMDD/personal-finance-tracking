import * as RadixToast from "@radix-ui/react-toast";

import {
    CheckCircle2,
    XCircle,
    AlertTriangle,
    Info,
    X,
} from "lucide-react";

import { motion } from "framer-motion";
import { cn } from "@/shared/lib/cn";

import type {
    ToastItem,
} from "./toast.types";

interface Props {
    toast: ToastItem;
    onClose(): void;
}

const variantClasses = {
    success:
        "border-[var(--color-success)]",
    error:
        "border-[var(--color-danger)]",
    warning:
        "border-[var(--color-warning)]",
    info:
        "border-[var(--color-primary)]",
};

const icons = {
    success: CheckCircle2,
    error: XCircle,
    warning: AlertTriangle,
    info: Info,
};

export function Toast({
    toast,
    onClose,
}: Props) {

    const Icon =
        icons[toast.variant];

    return (
        <RadixToast.Root
            open
            duration={5000}
            onOpenChange={(open) => {
                if (!open) {
                    onClose();
                }
            }}
            asChild
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.95,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                exit={{
                    opacity: 0,
                    y: -20,
                }}
                className={cn(
                    "flex items-start gap-3",
                    "rounded-[var(--radius-lg)]",
                    "border-l-4",
                    "bg-[var(--color-surface)]",
                    "p-4",
                    "shadow-[var(--shadow-lg)]",
                    variantClasses[
                        toast.variant
                    ],
                )}
            >
                <Icon
                    className="
                        mt-0.5
                        size-5
                        shrink-0
                    "
                />
                <div className="flex-1">
                    <p
                        className="
                            font-medium
                            text-[var(--color-text-primary)]
                        "
                    >
                        {toast.title}
                    </p>
                    {toast.description && (
                        <p
                            className="
                                mt-1
                                text-sm
                                text-[var(--color-text-secondary)]
                            "
                        >
                            {toast.description}
                        </p>
                    )}
                </div>
                <button
                    onClick={onClose}
                >
                    <X
                        size={18}
                    />
                </button>
            </motion.div>
        </RadixToast.Root>
    );
}