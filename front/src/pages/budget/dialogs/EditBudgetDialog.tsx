import { Dialog } from "@/shared/ui/dialog";

import type {
    Budget,
} from "@/entities/budget/model";

import type {
    BudgetFormValues,
} from "../forms/budget.schema";

import { BudgetForm } from "../forms/BudgetForm";

interface Props {
    open: boolean;
    budget: Budget | null;
    onOpenChange(
        open: boolean,
    ): void;
    onSubmit(
        values: BudgetFormValues,
    ): void;
}

export function EditBudgetDialog({
    open,
    budget,
    onOpenChange,
    onSubmit,
}: Props) {

    if (!budget) {
        return null;
    }

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            title="Редактировать бюджет"
            description="Измените параметры бюджета."
        >
            <BudgetForm
                defaultValues={{
                    title: budget.title,
                    categoryId: budget.categoryId,
                    limit: budget.limit,
                    period: budget.period,
                }}
                submitLabel="Сохранить"
                onSubmit={onSubmit}
                onCancel={() =>
                    onOpenChange(false)
                }
            />
        </Dialog>
    );
}