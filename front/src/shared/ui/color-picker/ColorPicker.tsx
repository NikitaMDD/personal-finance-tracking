import { cn } from "@/shared/lib/cn";

const COLORS = [
    "#22C55E",
    "#3B82F6",
    "#EF4444",
    "#8B5CF6",
    "#F97316",
    "#06B6D4",
    "#EAB308",
    "#64748B",
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
                flex
                flex-wrap
                gap-3
            "
        >
            {COLORS.map(color => (
                <button
                    key={color}
                    type="button"
                    onClick={() =>
                        onChange(color)
                    }
                    className={cn(
                        "h-10 w-10 rounded-full border-4 transition",
                        value === color
                            ? "border-black"
                            : "border-transparent",
                    )}
                    style={{
                        background: color,
                    }}
                />
            ))}
        </div>
    );
}