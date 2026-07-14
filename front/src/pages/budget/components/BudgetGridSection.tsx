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
    onCreate(): void;
}

export function BudgetGridSection({
    budgets,
    onEdit,
    onDelete,
    onCreate,
}: Props) {

    return (

        <BudgetGrid
            budgets={budgets}
            onEdit={onEdit}
            onCreate={onCreate}
            onDelete={onDelete}
        />

    );

}