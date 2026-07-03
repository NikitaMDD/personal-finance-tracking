import { Card } from "@/shared/ui/card";
import { ProgressRing } from "@/shared/ui/progress-ring";
import { Typography } from "@/shared/ui/typography";

import type {
    BudgetOverview,
} from "@/entities/budget/model";

interface Props {
    overview: BudgetOverview;
}

export function BudgetRingCard({
    overview,
}: Props) {

    return (
        <Card
            className="
                rounded-3xl
                p-8
            "
        >
            <div
                className="
                    flex
                    justify-center
                "
            >
                <ProgressRing
                    value={overview.percent}
                    gradient={[
                        "#22C55E",
                        "#4ADE80",
                    ]}
                    center={
                        <>
                            <Typography
                                variant="display"
                            >
                                {overview.percent}%
                            </Typography>

                            <Typography
                                variant="caption"
                                className="
                                    mt-2
                                    text-[var(--color-text-secondary)]
                                "
                            >
                                Использовано
                            </Typography>
                        </>
                    }
                />
            </div>
        </Card>
    );
}