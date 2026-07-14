import type {
    Budget,
    BudgetPeriod,
} from "./budget.types";

import type {
    BudgetResponse,
} from "./budget-response.types";

import type {
    CreateBudgetRequest,
} from "./create-budget-request.types";

import type {
    UpdateBudgetRequest,
} from "./update-budget-request.types";

import type {
    BudgetFormValues,
} from "@/pages/budget/forms/budget.schema";

import type {
    Category,
} from "@/entities/category/model";

import {
    getBudgetDateRange
} from "../lib/getBudgetDateRange";

const periodMap = {
    week: "WEEK",
    month: "MONTH",
    year: "YEAR",
} as const;

export function toBudget(
    budget: BudgetResponse,
): Budget {

    return {

        id: budget.id,

        title: budget.categoryName,

        categoryId: budget.categoryId,

        icon: budget.categoryIcon,

        color: budget.categoryColor,

        limit: budget.limitAmount,

        spent: budget.spentAmount,

        period:
            budget.period.toLowerCase() as BudgetPeriod,

    };

}

export function toCreateBudgetRequest(
    values: BudgetFormValues,
): CreateBudgetRequest {

    const range =
        getBudgetDateRange(
            values.period,
        );

    return {

        categoryId:
            values.categoryId,

        limitAmount:
            values.limit,

        period:
            periodMap[
                values.period
            ],

        startDate:
            range.startDate,

        endDate:
            range.endDate,

    };

}

export function toUpdateBudgetRequest(
    values: BudgetFormValues,
): UpdateBudgetRequest {

    const range =
        getBudgetDateRange(
            values.period,
        );

    return {

        categoryId: values.categoryId,

        limitAmount: values.limit,

        period: periodMap[values.period],

        startDate:
            range.startDate,

        endDate:
            range.endDate,

    };

}