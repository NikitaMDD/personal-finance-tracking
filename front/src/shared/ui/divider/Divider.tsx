import { cn } from "@/shared/lib/cn";

interface DividerProps {
    className?: string;
}

export function Divider({
    className,
}: DividerProps) {
    return (
        <div
            className={cn(
                "my-6 h-px bg-[var(--color-border)]",
                className,
            )}
        />
    );
}