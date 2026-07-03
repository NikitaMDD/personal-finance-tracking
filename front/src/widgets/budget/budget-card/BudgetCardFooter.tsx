import { Badge }
    from "@/shared/ui/badge";

import {
    calculateBudget,
} from "@/entities/budget/lib";

import type {
    Budget,
} from "@/entities/budget/model";

interface Props {
    budget: Budget;
}

export function BudgetCardFooter({
    budget,
}: Props) {

    const {
        overrun,
    } = calculateBudget(budget,);

    return (

        <div className="mt-6">
            {overrun > 0 ? (
                <Badge
                    variant="danger"
                >
                    Перерасход +{overrun.toLocaleString("ru-RU")} ₽
                </Badge>
            ) : (
                <Badge
                    variant="success"
                >
                    В пределах бюджета
                </Badge>
            )}
        </div>
    );
}