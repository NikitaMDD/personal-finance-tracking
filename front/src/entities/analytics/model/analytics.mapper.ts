import type {
    AnalyticsSummary,
    DailyExpense,
    ExpenseCategory,
    MonthlyExpense,
} from "./analytics.types";

import type {
    AnalyticsSummaryResponse,
} from "./analytics-summary-response.types";

import type {
    CategoryStatisticResponse,
} from "./category-statistic-response.types";

import type {
    MonthlyStatisticResponse,
} from "./monthly-statistic-response.types";

import type {
    DailyStatisticResponse,
} from "./daily-statistic-response.types";

import {
    categoryUI,
} from "@/entities/category/model/category-ui";

export function toAnalyticsSummary(
    response: AnalyticsSummaryResponse,
): AnalyticsSummary {

    return {

        income: response.income,

        expenses: response.expense,

        balance: response.balance,

        operations: response.operations,

    };

}

export function toExpenseCategories(
    response: CategoryStatisticResponse[],
): ExpenseCategory[] {

    const total =
        response.reduce(
            (sum, item) => sum + item.amount,
            0,
        );

    return response.map(item => {

        const ui =
            categoryUI[item.category] ?? {

                icon: "wallet",

                color: "#64748B",

            };

        return {

            id: item.category,

            categoryId: item.category,

            title: item.category,

            icon: ui.icon,

            color: ui.color,

            amount: item.amount,

            percent:
                total === 0
                    ? 0
                    : Math.round(
                          item.amount /
                          total *
                          100,
                      ),

        };

    });

}

export function toMonthlyExpenses(
    response: MonthlyStatisticResponse[],
): MonthlyExpense[] {

    return response.map(item => ({

        month:
            new Date(item.month)
                .toLocaleDateString(
                    "ru-RU",
                    {
                        month: "short",
                    },
                ),

        income: item.income,

        expenses: item.expense,

    }));

}

export function toDailyExpenses(
    response: DailyStatisticResponse[],
): DailyExpense[] {

    return response.map(item => ({

        day:
            new Date(item.day)
                .toLocaleDateString(
                    "ru-RU",
                    {
                        day: "numeric",
                    },
                ),

        amount: item.amount,

    }));

}