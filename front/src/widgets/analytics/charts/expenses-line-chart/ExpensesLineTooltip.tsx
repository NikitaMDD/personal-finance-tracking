import { Typography } from "@/shared/ui/typography";

interface Props {
    active?: boolean;
    payload?: {
        value: number;
    }[];
    label?: string;
}

export function ExpensesLineTooltip({
    active,
    payload,
    label,
}: Props) {

    if (
        !active ||
        !payload?.length
    ) {
        return null;
    }

    return (
        <div
            className="
                rounded-2xl
                border
                border-[var(--color-border)]
                bg-white
                p-4
                shadow-lg
            "
        >

            <Typography
                variant="caption"
                className="
                    text-[var(--color-text-secondary)]
                "
            >
                {label}
            </Typography>

            <Typography
                variant="h3"
                className="mt-1"
            >
                {payload[0].value.toLocaleString("ru-RU")} ₽
            </Typography>

        </div>
    );
}