import { cn } from "@/shared/lib/cn";

interface Props {
    value: number;
    color?: string;
    className?: string;
}

export function Progress({
    value,
    color,
    className,
}: Props) {

    return (
        <div
            className={cn(
                "h-2 w-full overflow-hidden rounded-full bg-[var(--color-surface-secondary)]",
                className,
            )}
        >
            <div
                className="
                    h-full
                    rounded-full
                    transition-all
                    duration-500
                "
                style={{
                    width: `${value}%`,
                    background: color,
                }}
            />
        </div>
    );
    
}