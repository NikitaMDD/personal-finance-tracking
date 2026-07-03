import { cn } from "@/shared/lib/cn";

const COLORS = [
    "#22C55E",
    "#3B82F6",
    "#8B5CF6",
    "#F97316",
    "#EF4444",
    "#06B6D4",
    "#EAB308",
    "#64748B",
    "#EC4899",
    "#84CC16",
    "#14B8A6",
    "#F59E0B",
];

interface Props {
    value?: string;
    onChange(color: string): void;
}

export function ColorPicker({
    value,
    onChange,
}: Props) {

    return (
        <div
            className="
                grid
                grid-cols-6
                gap-3
            "
        >
            {COLORS.map(color => {

                const selected =
                    value === color;

                return (

                    <button
                        key={color}
                        type="button"
                        onClick={() => onChange(color)}
                        className={cn(
                            `
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                transition-all
                                duration-200
                            `,
                            selected
                                ? `
                                    border-[var(--color-primary)]
                                    bg-[var(--color-surface-secondary)]
                                    shadow-md
                                    scale-105
                                `
                                : `
                                    border-[var(--color-border)]
                                    bg-white
                                    hover:border-[var(--color-primary)]
                                    hover:bg-[var(--color-surface-secondary)]
                                `,
                        )}
                    >
                        <div
                            className="h-6 w-6 rounded-full"
                            style={{
                                backgroundColor: color,
                            }}
                        />
                    </button>
                );
            })}
        </div>
    );
}