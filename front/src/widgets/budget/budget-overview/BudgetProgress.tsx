import { Progress } from "@/shared/ui/progress";
import { Typography } from "@/shared/ui/typography";

interface Props {
    percent: number;
}

export function BudgetProgress({
    percent,
}: Props) {

    return (
        <div className="mt-8">

            <div
                className="
                    mb-3
                    flex
                    items-center
                    justify-between
                "
            >
                <Typography variant="caption">
                    Использование бюджета
                </Typography>

                <Typography variant="caption">
                    {percent}%
                </Typography>
            </div>

            <Progress
                value={percent}
                color="var(--color-primary)"
            />

        </div>
    );
}