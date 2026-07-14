import { useHeader } from "@/shared/hooks/useHeader";

import {
    BudgetHeader,
    BudgetOverviewSection,
    BudgetGridSection,
} from "./components";

import {
    CreateBudgetDialog,
    EditBudgetDialog,
    DeleteBudgetDialog,
} from "./dialogs";

import { useBudget } from "./hooks/useBudget";

export function BudgetPage() {

    useHeader({
        search: {
            visible: false,
            placeholder: "",
        },
    });

    const budget = useBudget();

    return (
        <>
            <BudgetHeader
                onCreate={
                    budget.create.openDialog
                }
            />

            <BudgetOverviewSection
                overview={
                    budget.overview
                }
            />

            <BudgetGridSection
                budgets={budget.budgets}
                onCreate={
                    budget.create.openDialog
                }
                onEdit={budget.edit.openDialog}
                onDelete={budget.delete.openDialog}
            />

            <CreateBudgetDialog
                open={budget.create.open}
                onOpenChange={
                    budget.create.closeDialog
                }
                onSubmit={
                    budget.createBudget
                }
            />

            <EditBudgetDialog
                open={!!budget.edit.item}
                budget={budget.edit.item}
                onOpenChange={budget.edit.closeDialog}
                onSubmit={budget.editBudget}
            />

            <DeleteBudgetDialog
                open={!!budget.delete.item}
                budget={budget.delete.item}
                onOpenChange={budget.delete.closeDialog}
                onDelete={budget.deleteBudget}
            />
        </>
    );
}