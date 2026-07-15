import { Typography } from "@/shared/ui/typography";

interface Props {
    label: string;
    value: string;
    color?: string;
}

export function FinancialMetric({
    label,
    value,
    color,
}: Props) {

    return (

        <div>

            <Typography
                className="
                    text-[var(--color-text-secondary)]
                "
            >
                {label}
            </Typography>

            <Typography
                variant="h2"
                className="mt-1"
            >
                {value}
            </Typography>

        </div>

    );

}