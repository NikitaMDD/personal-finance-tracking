import type {
    Budget,
    BudgetOverview,
} from "./budget.types";

export function calculateBudgetOverview(
    budgets: Budget[],
): BudgetOverview {

    const totalLimit =
        budgets.reduce(
            (sum, budget) =>
                sum + budget.limit,
            0,
        );

    const totalSpent =
        budgets.reduce(
            (sum, budget) =>
                sum + budget.spent,
            0,
        );

    const totalRemaining =
        Math.max(
            totalLimit - totalSpent,
            0,
        );

    const percent =
        totalLimit === 0
            ? 0
            : Math.round(
                  totalSpent /
                      totalLimit *
                      100,
              );

    return {

        totalLimit,

        totalSpent,

        totalRemaining,

        percent,

    };

}