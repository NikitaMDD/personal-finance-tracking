import { Typography } from "@/shared/ui/typography";

interface Props {
    active?: boolean;
    label?: string;
    payload?: {
        name: string;
        value: number;
        color: string;
    }[];
}

export function IncomeExpenseTooltip({
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
                bg-[var(--color-surface)]
                p-4
                shadow-lg
            "
        >
            <Typography
                variant="h3"
                className="mb-3"
            >
                {label}
            </Typography>

            <div className="space-y-2">
                {payload.map(item => (
                    <div
                        key={item.name}
                        className="
                            flex
                            items-center
                            justify-between
                            gap-8
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >
                            <div
                                className="h-3 w-3 rounded-full"
                                style={{
                                    background: item.color,
                                }}
                            />

                            <Typography>
                                {item.name}
                            </Typography>
                        </div>

                        <Typography>
                            {item.value.toLocaleString("ru-RU")} ₽
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
}