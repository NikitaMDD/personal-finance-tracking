import {
    useMemo,
    useState,
} from "react";

import {
    budgetOverviewMock,
    budgetsMock,
} from "@/entities/budget/model";

import type {
    Budget,
} from "@/entities/budget/model";

import type {
    BudgetFormValues,
} from "../forms/budget.schema";

import {
    categoriesMock,
} from "@/entities/category/model";

import {
    useCrudDialogs,
} from "@/shared/hooks/useCrudDialogs";

export function useBudget() {

    const [budgets, setBudgets] =
        useState(budgetsMock);

    const dialogs =
        useCrudDialogs<Budget>();

    const overview =
        useMemo(
            () => budgetOverviewMock,
            [],
        );

    function createBudget(
        values: BudgetFormValues,
    ) {

        const category =
            categoriesMock.find(
                category =>
                    category.id ===
                    values.categoryId,
            );

        if (!category) {
            return;
        }

        const budget: Budget = {
            id: crypto.randomUUID(),
            title: values.title,
            categoryId: values.categoryId,
            icon: category.icon,
            color: category.color,
            period: values.period,
            limit: values.limit,
            spent: 0,
        };

        setBudgets(previous => [
            budget,
            ...previous,
        ]);

        dialogs.create.closeDialog();

    }

    function editBudget(
        values: BudgetFormValues,
    ) {

        if (!dialogs.edit.item) {
            return;
        }

        const category =
            categoriesMock.find(
                category =>
                    category.id ===
                    values.categoryId,
            );

        if (!category) {
            return;
        }

        setBudgets(previous =>
            previous.map(budget =>
                budget.id === dialogs.edit.item!.id
                    ? {
                        ...budget,
                        title: values.title,
                        categoryId: values.categoryId,
                        icon: category.icon,
                        color: category.color,
                        limit: values.limit,
                        period: values.period,
                    }
                    : budget,
            ),
        );
        dialogs.edit.closeDialog();
    }

    function deleteBudget() {
        if (!dialogs.delete.item) {
            return;
        }
        setBudgets(previous =>
            previous.filter(
                budget =>
                    budget.id !==
                    dialogs.delete.item!.id,
            ),
        );
        dialogs.delete.closeDialog();
    }

    return {
        overview,
        budgets,
        ...dialogs,
        createBudget,
        editBudget,
        deleteBudget,
    };
}