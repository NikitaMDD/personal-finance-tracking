import type {
    Budget,
} from "@/entities/budget/model";

import {
    BudgetGrid,
} from "@/widgets/budget/budget-grid";

interface Props {
    budgets: Budget[];
    onEdit(
        budget: Budget,
    ): void;
    onDelete(
        budget: Budget,
    ): void;
}

export function BudgetGridSection({
    budgets,
    onEdit,
    onDelete,
}: Props) {

    return (

        <BudgetGrid
            budgets={budgets}
            onEdit={onEdit}
            onDelete={onDelete}
        />

    );

}