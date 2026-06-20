import { cn } from "@/shared/lib/cn";

interface InputVariantsProps {
    error?: boolean;
    fullWidth?: boolean;
}

export function inputVariants({
    error = false,
    fullWidth = false,
}: InputVariantsProps) {
    return cn(
        "h-11 rounded-[var(--radius-md)] border bg-white px-4 outline-none transition-all",

        error
            ? "border-[var(--color-danger)]"
            : "border-[var(--color-border)]",

        "focus:border-[var(--color-primary)]",

        "disabled:cursor-not-allowed disabled:opacity-50",

        fullWidth && "w-full",
    );
}