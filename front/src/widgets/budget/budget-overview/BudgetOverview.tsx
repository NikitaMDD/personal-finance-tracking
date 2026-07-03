import type { BudgetOverview as BudgetOverviewModel } from "@/entities/budget/model";

import { BudgetRingCard } from "./BudgetRingCard";
import { BudgetStatsCard } from "./BudgetStatsCard";

interface Props {
    overview: BudgetOverviewModel;
}

export function BudgetOverview({
    overview,
}: Props) {

    return (
        <div
            className="
                grid
                gap-6
                lg:grid-cols-[320px_1fr]
            "
        >
            <BudgetRingCard
                overview={overview}
            />
            <BudgetStatsCard
                overview={overview}
            />
        </div>
    );
}