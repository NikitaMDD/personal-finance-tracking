import { ChartCard } from "@/shared/ui/chart-card";
import { Typography } from "@/shared/ui/typography";

interface Props {
    title: string;
}

export function ChartPlaceholder({
    title,
}: Props) {

    return (
        <ChartCard
            title={title}
        >
            <div
                className="
                    flex
                    h-[320px]
                    items-center
                    justify-center
                    rounded-2xl
                    border-2
                    border-dashed
                    border-[var(--color-border)]
                "
            >
                <Typography
                    variant="body"
                    className="
                        text-[var(--color-text-secondary)]
                    "
                >
                    В разработке
                </Typography>
            </div>
        </ChartCard>
    );
}