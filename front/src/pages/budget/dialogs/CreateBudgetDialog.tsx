import { Dialog } from "@/shared/ui/dialog";

import { BudgetForm } from "../forms/BudgetForm";

import type {
    BudgetFormValues,
} from "../forms/budget.schema";

interface Props {
    open: boolean;

    onOpenChange(
        open: boolean,
    ): void;

    onSubmit(
        values: BudgetFormValues,
    ): void;
}

export function CreateBudgetDialog({
    open,
    onOpenChange,
    onSubmit,
}: Props) {

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            title="Создать бюджет"
            description="Создайте новый бюджет для контроля расходов."
        >
            <BudgetForm
                submitLabel="Создать"
                onSubmit={onSubmit}
                onCancel={() =>
                    onOpenChange(false)
                }
            />
        </Dialog>
    );
}