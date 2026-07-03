import type {
    BudgetOverview,
} from "@/entities/budget/model";

import { BudgetOverview as BudgetOverviewWidget }
    from "@/widgets/budget/budget-overview";

interface Props {
    overview: BudgetOverview;
}

export function BudgetOverviewSection({
    overview,
}: Props) {

    return (

        <BudgetOverviewWidget
            overview={overview}
        />

    );
}