import type {
    CategoryStatistics,
} from "@/entities/transaction/model/category-statistics.types";

import type {
    ExpenseCategory,
} from "@/entities/analytics/model";

import {
    categoryUI,
} from "@/entities/category/model/category-ui";

export function toExpenseCategories(
    data: CategoryStatistics[],
): ExpenseCategory[] {

    const total =
        data.reduce(
            (sum, item) => sum + item.amount,
            0,
        );

    return data.map(item => {

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