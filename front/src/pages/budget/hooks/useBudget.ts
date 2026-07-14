import { useMemo } from "react";

import { useCrudDialogs } from "@/shared/hooks/useCrudDialogs";

import type {
    Budget,
} from "@/entities/budget/model";

import {
    useBudgets,
} from "@/entities/budget/hooks/useBudgets";

import {
    useCreateBudgetMutation,
} from "@/entities/budget/hooks/useCreateBudgetMutation";

import {
    useUpdateBudgetMutation,
} from "@/entities/budget/hooks/useUpdateBudgetMutation";

import {
    useDeleteBudgetMutation,
} from "@/entities/budget/hooks/useDeleteBudgetMutation";

import {
    calculateBudgetOverview,
} from "@/entities/budget/model/budget-overview.mapper";

import type {
    BudgetFormValues,
} from "../forms/budget.schema";

import {
    toCreateBudgetRequest,
    toUpdateBudgetRequest
} from "@/entities/budget/model/budget.mapper"

export function useBudget() {

    const dialogs =
        useCrudDialogs<Budget>();

    const budgetsQuery =
        useBudgets();

    const createMutation =
        useCreateBudgetMutation();

    const updateMutation =
        useUpdateBudgetMutation();

    const deleteMutation =
        useDeleteBudgetMutation();

    const budgets =
        budgetsQuery.data ?? [];

    const overview =
        useMemo(
            () =>
                calculateBudgetOverview(
                    budgets,
                ),
            [budgets],
        );

    async function createBudget(
        values: BudgetFormValues,
    ) {

        await createMutation.mutateAsync(
            toCreateBudgetRequest(values),
        );

        dialogs.create.closeDialog();

    }

    async function editBudget(
        values: BudgetFormValues,
    ) {

        if (!dialogs.edit.item) {
            return;
        }

        await updateMutation.mutateAsync({

            id: dialogs.edit.item.id,

            data: toUpdateBudgetRequest(values),

        });

        dialogs.edit.closeDialog();

    }

    async function deleteBudget() {

        if (!dialogs.delete.item) {
            return;
        }

        await deleteMutation.mutateAsync(
            dialogs.delete.item.id,
        );

        dialogs.delete.closeDialog();

    }

    return {

        overview,

        budgets,

        isLoading:
            budgetsQuery.isLoading,

        isCreating:
            createMutation.isPending,

        isUpdating:
            updateMutation.isPending,

        isDeleting:
            deleteMutation.isPending,

        ...dialogs,

        createBudget,

        editBudget,

        deleteBudget,

    };

}